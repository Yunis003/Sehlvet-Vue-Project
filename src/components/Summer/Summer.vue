<style>
.summerContainer{
    width:100%;
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
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.leftImg{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 50%;
    text-align: center;
}
.leftImg img, .rightImg img:nth-child(1){
    width: 60%;
}
.rightImg{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 50%;
    position: relative;
    
}
.smallPic{
    position: absolute;   
    bottom: -50px;
    left: 30px; 
}
.exploreBtn{width: 200px;
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
        align-self: flex-end;
}
</style>

<template>
    <div class="summerContainer">
         <div class="topContainer">
            <div class="txts">
            <h2><i>Trending</i> <span>Collections</span></h2>
            <hr>
            </div>
            <p>Have a look on what's trending now!</p>
        </div>
        <div class="bottomContainer">
            <div class="leftImg">
                <img src="./img/left.svg" alt="first-card" class="card">
                <p>
                    Our main aim is to serve our customer with better quality product. We try to understand 
                    their needs and provide them within a short period of time.
                </p>
            </div>
            <div class="rightImg">
                <p>
                    We provide the largest clothing collection for any season. You can choose trendy or classy 
                    design according to your preferences. Our services are super fast and we update within 24 hours.
                </p>
                <img src="./img/right.svg" alt="woman-img">
                <img src="./img/small.svg" alt="woman-img" class="smallPic">
                <button class="exploreBtn">Explore</button>
            </div>
        </div>
    </div>
</template>