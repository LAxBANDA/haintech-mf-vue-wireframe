<template>
  <nav v-if="site">
    <div id="left">
      <button type="button" @click="$emit('toggleShowAside')"><v-icon>menu</v-icon></button>
    </div>
    <div id="center">
      <h1>{{ site.name }}</h1>
    </div>
    <div id="right">
      <img id="logo" :src="site.logo" :alt="site.name" />
      <button id="apps-button" type="button">
        <v-icon>apps</v-icon>
      </button>
    </div>
  </nav>
</template>

<script>
import sites from "../sites";
export default {
  emits: ["toggleShowAside"],
  data() {
    return {
      site: null,
    };
  },
  mounted() {
    console.log(location.host);
    this.site = sites[location.host];
    console.log("sitio cargado", { site: this.site });
  },
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  gap: 0.5em;
  position: fixed;
  width: 100%;
  background-color: orange;
}

nav::before {
  background: currentColor;
  bottom: 0;
  content: "";
  left: 0;
  opacity: 0.1;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.2s opacity;
}

nav > #center {
  margin-right: auto;
  margin-left: 0.5em;
}

nav > * {
  gap: 0 0.5em;
  padding: 0 0.5em;
  display: flex;
  align-items: center;
}

img#logo {
  height: 64px;
  width: auto;
}

button[type="button"] {
  cursor: pointer;
}

button {
  background: none;
  border: none;
}

button > span.material-icons {
  font-size: xx-large;
  color: white;
  text-shadow: 0 0 0.05em black;
}
</style>
