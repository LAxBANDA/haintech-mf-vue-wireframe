<template>
  <div>
    <header>
      <Navbar />
    </header>

    <Sidebar />

    <main>
      <SectionButtons />
    </main>

    <!-- <footer>Footer content</footer> -->
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import BaseSection from "./BaseSection.vue";
import SectionButtons from "./SectionButtons.vue";

export default {
  components: {
    Navbar,
    Sidebar,
    BaseSection,
    SectionButtons
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
  height: 64px;
}
</style>
