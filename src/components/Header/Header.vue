<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&family=Roboto+Slab:wght@100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
header{
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
}
ul{
    display: flex;
    list-style-type: none;
    justify-content: center;
    align-items: center;
    gap: 40px;
    font-size: 22px;
    >a{
        cursor: pointer;
        text-decoration: none;
        color: black;
        transition: all 0.3s ease;
        &:hover{
            color: red;
        }
    }
}
.other{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    font-size: 22px;
    >i{
        cursor: pointer;
    }
}
</style>
<template>
    <header>
      <img src="./img/Sehlvet.svg" alt="site-logo">
      <nav>
        <ul>
          <router-link to="/">Home</router-link>
          <router-link to="/collections">Collections</router-link>
          <router-link to="/brands">Brands</router-link>
          <router-link to="/about">About Us</router-link>
        </ul>
      </nav>
      <div class="other">
        <i class="fa-solid fa-bookmark"></i>
        <i class="fa-solid fa-bag-shopping"></i>
      </div>
    </header>
    
</template>
<!-- <script>
export default {
  name: "Header",
}
</script> -->