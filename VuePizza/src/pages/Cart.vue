<script>
    import Pizza from '../components/Cart-pizza.vue'
    import { mapGetters, mapActions } from 'vuex'

    export default {

        components: {
            Pizza
        },

        data() {
            return {
 
            }
        },

        computed: {
            ...mapGetters(["getCart"]),
        },
    }
</script>

<template>
    <div class="container">
        <div class="title">
            <div class="title__left">
                <img src="../assets/cart_icon2.svg" alt="" class="title__cart-icon">
                <h2 class="title__cart-text">Корзина</h2>
            </div>
            <button class="title__right">
                <img src="../assets/trash_icon.svg" alt="" class="title__trash-icon">
                <p class="title__trash-text">Очистить корзину</p>
            </button>
        </div>

        <div class="pizzas_list">
            <Pizza v-for="pizza in getCart" :key="pizza.index" :pizza="pizza"></Pizza>
        </div>

        <div class="footer">
            <div class="info">

                <div class="info__text-wrapper">
                    <p class="info__text">Всего пицц: &nbsp</p>
                    <p class="info__ammount">3 шт.</p>
                </div>
                
                <div class="info__text-wrapper">
                    <p class="info__text">Сумма заказа: &nbsp</p>
                    <p class="info__total">900 ₽</p>
                </div>

            </div>

            <div class="buttons-container">

                <button class="left-button">
                    <div class="left-button__inner-wrapper">
                        <img src="../assets/arrow_icon.svg" alt="" class="left-button__arrow">
                        <p class="left-button__text">Вернуться назад</p>
                    </div>
                </button>

                <button class="right-button">
                    <p class="right-button__text">Оплатить сейчас</p>
                </button>

            </div>

        </div>
    </div>
</template>

<style scoped>
    .container{
        max-width: 821px;
        display: flex;
        flex-direction: column;
        margin: 94px auto 131px auto;
    }
    .title{
        height: 39px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    .title__left{
        display: flex;
        height: 39px;
        align-items: center;
    }
    .title__right{
        display: flex;
        height: 23px;
        align-items: center;
        margin-top: 13px;
        background: none;
        border: none;
        cursor: pointer;
    }
    .title__cart-icon{
        width: 29px;
        height: 29px;
        margin-right: 17px;
    }
    .title__cart-text{
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.32px;
    }
    .title__trash-icon{
        width: 20px;
        height: 20px;
        margin-right: 7px;
    }
    .title__trash-text{
        color: #B6B6B6;
        font-size: 16px;
        font-weight: 400;
    }
    .pizzas_list{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .footer{
        display: flex;
        flex-direction: column;
        margin-top: 10px;
    }
    .info{
        display: flex;
        justify-content: space-between;
    }
    .info__text-wrapper{
        display: flex;
    }
    .info__text{
        font-size: 22px;
        font-weight: 400;
        letter-spacing: 0.22px;
    }
    .info__ammount, .info__total{
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.22px;
    }
    .info__total{
        color: #FE5F1E;;
    }
    .buttons-container{
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }
    .left-button, .right-button{
        width: 211px;
        height: 55px;
        border-radius: 30px;
        padding: 18px 0 16px 0;
        align-items: center;
    }
    .left-button__inner-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .left-button{
        background: none;
        border: 1px solid #D3D3D3;
        cursor: pointer;
    }
    .left-button__arrow{
        height: 12px;
        width: 6px;
        margin-right: 15px;
    }
    .left-button__text{
        color: #CACACA;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
    }
    .right-button{
        background: #FE5F1E;
        border: none;
        cursor: pointer;
    }
    .right-button__text{
        color: #FFF;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
    }
</style>