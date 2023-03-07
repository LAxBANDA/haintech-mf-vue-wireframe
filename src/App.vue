<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500&display=swap" rel="stylesheet">
  </head>
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
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
}

:root {
  --primary-color: #E7632F;
  --primary-soft-color: #FCDCCF;
  --secondary-color: #00BAFF;
  --secondary-soft-color: #99E3FF;
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

a:hover {
  color: var(--secondary-color);
}
</style>
