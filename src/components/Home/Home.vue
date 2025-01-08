<style scoped>
    .introSide{
        width: 90%;
        display: flex;
    }
    .rightSide{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }   
    .woman-img{
        width: 70%;
        z-index: 1;
        position: absolute;
        top: -200px;
        left:50px
    }
    .rectangle{
        width: 50%;
    }
    .leftSide{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 80px;
        color: #2F2F2F;
    }
    .top{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .heading-txt{
        font-size: 6rem;
    }
    .heading-description{
        width: 89%;
       font-size:1.2rem
    }
    .exploreBtn{
        width: 200px;
        height: 50px;
        background-color: #754F23;
        color: white;
        border: none;
        font-size: 16px;
        border-radius: 10px;
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
</style>

<script>

</script>

<template>
    <div class = "introSide">
        <div class="leftSide">
            <div class="top">
            <h1 style="color: #2F2F2F;" class="heading-txt">Elevate Style, Embrace Story</h1>
            <p class="heading-description">We provide the largest clothing collection for any season. You can choose trendy or classy 
                design according to your preferences. Our services are super fast and we update within 24 hours.</p>
            </div>
            <button class="exploreBtn">Explore <img src="./img/rightArrow.svg" alt="right-arrow"></button>
        </div>
        <div class="rightSide">
            <img src="./img/reactangle.svg" alt="rectangle" class="rectangle">
            <img src="./img/woman.svg" alt="woman-img" class="woman-img">
        </div>
    </div>
</template>