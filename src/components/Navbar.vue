<template>
  <nav v-if="site">
    <div id="left">
      <ButtonMenu />
      <!-- <button><img src="../assets/Home.svg" alt="Home" class="iconNavBar"></button>
      <a href="#">Modulo 1</a>
      <a href="#">Modulo 2</a>
      <a href="#">Modulo 3</a> -->
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
import { defineComponent } from "vue";
import ButtonMenu from '@/components/Button/Menu.vue';

import sites from "@/sites";
export default defineComponent({
  setup(){
    const site = sites[location.host];
    return { site }
  },
  components:{
    ButtonMenu
  },
});
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  gap: 0.5em;
  position: fixed;
  width: 100%;
  background-color: #fff;
  color: var(--primary-color);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
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

.iconNavBar {
  /* Filter to change color to Primary Color #E7632F on SVG*/
  /* Use https://codepen.io/sosuke/pen/Pjoqqp to get wanted color on SVG*/
  filter: invert(44%) sepia(62%) saturate(991%) hue-rotate(339deg) brightness(95%) contrast(90%);
}
</style>
