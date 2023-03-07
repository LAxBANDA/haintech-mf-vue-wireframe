<template>
    <section>
        <h1>{{ name }}</h1>
        <slot></slot>
    </section>
</template>

<script>
export default {
    props: ["name"]   
}
</script>

<style>
section {
    padding: 2em;
}
</style>