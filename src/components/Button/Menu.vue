<template>
    <button type="button" @click="toggle()"><img src="@/assets/Hamburger_menu.svg" alt="Hamburger Menu" class="iconNavBar"></button>
</template>
    
<script>
import { useMenuStore } from "@/store/menu";
import { useOverlayStore } from "@/store/overlay";
import { defineComponent } from "vue";
    
export default defineComponent({
    setup() {
        const menuStore = useMenuStore();
        const overlayStore = useOverlayStore();

        const toggle = () => menuStore.toggle() || overlayStore.toggle();
        return { toggle };
    },
});
</script>

<style scoped>
button[type="button"] {
    transition: transform .3s ease;
}

button[type="button"]:hover{
    transform: scale(1.2);
}
</style>