<style scoped>
.winterContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
}
.topContainer{
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    justify-self: flex-end;
    gap: 20px;
    width: 500px;
    margin-top: 70px;
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
    display: flex;
    align-items: center;
    gap: 50px;
}
.leftSide{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
}
.leftSide img{
    width: 50%;
}
.bigImg{
    justify-self: flex-end;
    align-self: flex-end;
}
.smallImg{
    position: absolute;
    bottom: 0px;
    right: 120px;
}
.rightSide{
    width:50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.rightSide button{
    width: 200px;
        height: 50px;
        background-color: transparent;
        color: #2F2F2F;
        border: 1px solid #2F2F2F;
        font-size: 16px;
        border-radius: 10px;
        display: flex;
        gap: 20px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        align-self: flex-end;
}
</style>
<template>
    <div class="winterContainer">
     <div class="topContainer">
            <div class="txts">
            <h2><i>Trending</i> <span>Collections</span></h2>
            <hr>
            </div>
            <p>Have a look on what's trending now!</p>
     </div>
     <div class="bottomContainer">
        <div class="leftSide">
            <p>
                We provide the largest clothing collection for any season. You can choose trendy or classy design according 
                to your preferences. Our services are super fast and we update within 24 hours.
            </p>
            <img src="./img/index0.svg" alt="woman-img" class="bigImg">
            <img src="./img/index1.svg" alt="woman-img" class="smallImg">
        </div>
        <div class="rightSide">
            <button class="btn">Explore</button>
            <p>
                Our main aim is to serve our customer with better quality product. We try to understand their needs and provide them within a short period of time.
                 We provide the largest clothing collection for any season. You can choose trendy or classy design according to 
                 your preferences. Our services are super fast and we update within 24 hours.
            </p>
        </div>
     </div>
    </div>
</template>

<script>
export default {
  name: 'Winter'
};
</script>