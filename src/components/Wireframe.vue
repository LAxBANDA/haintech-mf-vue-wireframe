<template>
  <div>
    <header>
      <Navbar @toggleShowAside="showAside = !showAside" />
    </header>

    <Sidebar :value="showAside" />

    <main>Main Content</main>

    <footer>Footer content</footer>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
  },
  data() {
    return {
      showAside: false,
    };
  },
  mounted() {
    let Script = document.createElement("link");
    Script.setAttribute(
      "href",
      "https://fonts.googleapis.com/icon?family=Material+Icons"
    );
    Script.setAttribute("rel", "stylesheet");
    document.head.appendChild(Script);

    Script = document.createElement("link");
    Script.setAttribute(
      "href",
      "https://fonts.googleapis.com/css?family=Raleway&amp;display=swap"
    );
    Script.setAttribute("rel", "stylesheet");
    document.head.appendChild(Script);
  },
};
</script>

<style>
header {
}
</style>
