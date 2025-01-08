<script setup>
 import Header from './components/Header/Header.vue'
</script>
<style scoped>
  .allContainer{
    width: 100%;
    background-color:rgb(240, 234, 221) ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 120px;
    position: relative;
  }
</style>
<template>
  <div class="allContainer">
  <Header />
  <router-view></router-view>
  <!-- <Footer /> -->
  </div>
</template>