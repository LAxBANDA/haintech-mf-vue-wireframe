<template>
  <aside>
    <div :class="['overlay', { hidden: !value }]"></div>
    <div :class="['list-items', { hidden: !value }]">
      <a v-for="(item, index) in asideItems" :href="item.href">
        <v-icon v-if="item.icon" class="mr-2">{{ item.icon }}</v-icon
        >{{ item.title }}
      </a>
    </div>
  </aside>
</template>

<script>
export default {
  props: ["value"],
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
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: all ease 0.3s;
  z-index: -1;
}

.overlay.hidden {
  background: transparent;
}

aside {
  height: 100%;
  top: 64px;
}

.list-items {
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: white;
  height: 100%;
  transition: all ease 0.3s;
}

.list-items.hidden {
  width: 0%;
  display: none;
}

@media only screen and (max-width: 600px) {
  .list-items {
    width: 100%;
  }
}

.list-items > * {
  padding: 1em 0.5em;
}

.list-items > a::before:hover {
  opacity: 0.1;
}

.list-items > a::before {
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
