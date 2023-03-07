<template>
    <Transition>
        <div v-show="overlayStore.show" class="overlay" @click="overlayStore.click()"></div>
    </Transition>
</template>

<script>
import { useOverlayStore } from '@/store/overlay'
import { defineComponent } from 'vue';

export default defineComponent({    
    setup() {
        const overlayStore = useOverlayStore();
        
        return { overlayStore }
    }
})
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
}

</style>