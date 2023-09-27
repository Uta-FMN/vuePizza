<template>
    <router-link to="/main" class="header-left">
        <div class="header-left__logo"></div>
        <div class="header-left__wrapper">
            <h1 class="header-left__title">VUE PIZZA</h1>
            <p class="header-left__description">самая вкусная пицца во вселенной</p>
        </div>
    </router-link>
</template>

<style scoped>
    .header-left p{
        font-size: 16px;
        font-style: normal;
    }
    .header-left{
        display: flex;
        text-decoration: none;
        cursor: pointer;
    }
    .header-left__logo{
        width: 38px;
        height: 38px;
        background: url(../assets/PizzaLogo.svg);
        margin: 5px 0 10px 0;
    }
    .header-left__wrapper{
        margin: 0 0 5px 17px;
        height: 48px;
    }
    .header-left__title{
        color: #181818;
        font-size: 24px;
        font-weight: 800;
        letter-spacing: 0.24px;
    }
    .header-left__description{
        color: #7B7B7B;
        font-weight: 400;
    }
</style>