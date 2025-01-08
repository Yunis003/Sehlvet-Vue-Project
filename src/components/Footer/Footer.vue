<style scoped>
footer{
    width: 100%;
    height: 200px;
    color: #d1c9c0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(117, 79, 35);
    padding: 20px 70px;
    margin-top: 60px;
    position: fixed;
    bottom: 0;
}
.infoSide{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.navSide, .socialSide, .infoSide{
    height: 130px;

}
ul{
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style-type: none;
}
ul li a{
    cursor: pointer;
        text-decoration: none;
        color: #d1c9c0;
        transition: all 0.3s ease;
}
</style>

<template>
<footer>
    <div class="infoSide">
        <h2>Sehlvet</h2>
        <p>2023 Sehlvet, All Righs Reserved</p>
    </div>
    <div class="navSide same">
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/collections">Collections</router-link></li>
            <li><router-link to="/brands">Brands</router-link></li>
        </ul>
    </div>
    <div class="socialSide same">
        <ul>
            <li>Contact us</li>
            <li>325-273-231</li>
            <li>sehlvet@mgail.com</li>
            <li>Visit us on Instagram</li>
        </ul>
    </div>
</footer>
</template>