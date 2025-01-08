<style scoped>
.trendingContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
}
.topContainer{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 500px;
}
.topContainer hr{
    width: 150px
}
.txts{
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.txts h2{
    font-size: 3rem;
    color: #2F2F2F;
}
.txts h2 span{
    font-size: 2rem;
    color: #754F23;
}
.bottomContainer{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.card-third{
    margin-bottom: 70px;
}
</style>
<template>
    <div class="trendingContainer">
        <div class="topContainer">
            <div class="txts">
            <h2>Trending <span>Collections</span></h2>
            <hr>
            </div>
            <p>Have a look on what's trending now!</p>
        </div>
        <div class="bottomContainer">
            <img src="./img/card.svg" alt="first-card" class="card">
            <img src="./img/card2.svg" alt="second-card" class="card">
            <img src="./img/card3.svg" alt="third-card" class="card-third">
        </div>
    </div>
</template>