<template>
  <Wireframe>
    <router-view />
  </Wireframe>
</template>

<script>
import Wireframe from "./components/Wireframe.vue";

export default {
  components: {
    Wireframe,
  },
};
</script>

<style>
#app {
  font-family: Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body{ 
  margin: 0;
}
</style>
