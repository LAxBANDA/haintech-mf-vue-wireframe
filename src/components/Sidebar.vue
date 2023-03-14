<template>
  <Transition>
    <aside v-show="menuStore.show">
      <a v-for="(item, index) in asideItems" :href="item.href">
        <Icon v-if="item.icon" class="mr-2">{{ item.icon }}</Icon
        >{{ item.title }}
      </a>
    </aside>
  </Transition>
</template>

<script>
import { useMenuStore } from "@/store/menu";
import { useOverlayStore } from "@/store/overlay";
import Icon from "@/components/Icon";

export default {
  components: {
    Icon,
  },
  setup() {
    const menuStore = useMenuStore();
    const overlayStore = useOverlayStore();
    const callback = ({ name }) =>
      name === "click" && (menuStore.toggle() || overlayStore.toggle());
    overlayStore.$onAction(callback, true);
    return { menuStore };
  },
  data() {
    return {
      asideItems: [
        {
          title: "Inicio",
          href: "/",
          icon: "home",
        },
        {
          title: "Modulo 1",
          href: "/s",
          icon: "face",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: width 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  width: 0%;
}

aside {
  top: 64px;
  display: flex;
  flex-direction: column;
  width: 20em;
  background-color: white;
  height: 100%;
  position: fixed;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: width 0.3s ease;
  z-index: 1
}

@media only screen and (max-width: 600px) {
  aside {
    width: 100%;
  }
}

aside > * {
  padding: 1em 0.5em;
}

aside > a::before:hover {
  opacity: 0.1;
}

aside > a::before {
  background: currentColor;
  bottom: 0;
  content: "";
  left: 0;
  pointer-events: none;
  opacity: 0.2;
  position: relative;
  right: 0;
  top: 0;
  transition: opacity ease 0.5s;
}

.mr-2 {
  margin-right: 2px;
}
</style>
