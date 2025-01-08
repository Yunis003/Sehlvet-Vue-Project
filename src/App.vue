<script setup>
 import Header from './components/Header/Header.vue'
  import Footer from './components/Footer/Footer.vue'
</script>
<style scoped>
  .allContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }
</style>
<template>
  <div class="allContainer">
  <Header />
  <router-view></router-view>
  <Footer />
  </div>
</template>