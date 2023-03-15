<template>
  <Overlay></Overlay>
  <header>
    <Suspense>
      <template #default>
        <Navbar />
      </template>
      <template #fallback>
        <p>Loading........ </p>
      </template>
    </Suspense>
  </header>

  <Sidebar />

  <main>
    <slot />
  </main>

  <footer>Footer content</footer>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import BaseSection from "./BaseSection.vue";
import SectionButtons from "./SectionButtons.vue";
import { defineAsyncComponent, onErrorCaptured } from "vue";
import Overlay from './Overlay.vue'
const Navbar = defineAsyncComponent(() => import("./Navbar.vue"));
export default {
  components: {
    Navbar,
    Sidebar,
    BaseSection,
    SectionButtons,
    Overlay
  },
  setup() {
    onErrorCaptured(err => {
      console.log('Error:',err)
      return true
    })

    return {
      showAside: false,
    };
  },
  created() {
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
      "https://fonts.googleapis.com/css?family=Poppins&amp;display=swap"
    );
    Script.setAttribute("rel", "stylesheet");
    document.head.appendChild(Script);
  },
};
</script>

<style scoped>
header {
  height: 64px;
}

footer {
  display: flex;
  align-items: center;
  gap: 0.5em;
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: #fff;
  color: var(--primary-color);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
}
</style>
