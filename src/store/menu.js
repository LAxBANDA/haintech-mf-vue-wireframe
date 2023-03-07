import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
    state: () => ({
        show: 0,
    }),
    actions: {
        toggle() {
            this.show = !this.show
        },
        on() {
            this.show = true;
        },
        off() {
            this.show = false;
        },
        set(val) {
            this.show = val;
        },
        click() {
        }
    },
});