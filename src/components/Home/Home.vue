<script setup>
    import Intro from '../Intro/Intro.vue'
    import Trending from '../Trending/Trending.vue';
</script>
<style scoped>
    .homeContainer{
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
</style>
<template>
    <div class="homeContainer">
        <Intro/>
        <Trending/>
    </div>
</template>