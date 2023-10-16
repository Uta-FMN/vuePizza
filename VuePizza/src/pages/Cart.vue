<script>
    import Pizza from '../components/Cart-pizza.vue'
    import cButton from '../components/Button.vue'
    import { mapGetters, mapMutations } from 'vuex'
    import router from '../router'

    export default {

        components: {
            Pizza,
            cButton
        },

        methods: {
            ...mapMutations(["cartClear"]),

            clearCart(){
                this.cartClear()
            },

            goToMain(){
                router.push({ name: 'Main' })
            }
        },

        computed: {
            ...mapGetters(["getCart", "getCartAmmount", "getCartPrice"]),
        }
    }
</script>

<template>
    <div class="container">

        <template v-if="getCart.length === 0">
            <div class="cart-empty">
                    <h2 class="cart-empty__title">Корзина пустая 😕</h2>

                    <div class="cart-empty__text">
                        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.
                    </div>

                    <img src="../assets/empty-cart.svg" alt="" class="cart-empty__img">

                    <div class="cart-empty__btn">
                        <cButton @onClick="goToMain" type="black" size="medium">
                            <p class="cart-empty__btn-text">
                                Вернуться назад
                            </p>
                        </cButton>
                    </div>
            </div>
        </template>

        <template v-else>
            <div class="title">
                <div class="title__left">
                    <img src="../assets/cart_icon2.svg" alt="" class="title__cart-icon">
                    <h2 class="title__cart-text">Корзина</h2>
                </div>

                <button class="title__right" @click="clearCart()">
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
                        <p class="info__ammount">{{getCartAmmount}} шт.</p>
                    </div>
                    
                    <div class="info__text-wrapper">
                        <p class="info__text">Сумма заказа: &nbsp</p>
                        <p class="info__total">{{getCartPrice}} ₽</p>
                    </div>
                </div>
    
                <div class="buttons-container">
                    <cButton @onClick="goToMain" type="grey" size="large">
                        <img src="../assets/arrow_icon.svg" alt="" class="left-button__arrow">
                        <p class="left-button__text">Вернуться назад</p>
                    </cButton>

                    <cButton size="large">
                        <p class="right-button__text">Оплатить сейчас</p>
                    </cButton>
                </div>
            </div>
        </template>
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
    .right-button__text{
        color: #FFF;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
    }
    .cart-empty{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto 69px auto;
        max-width: 547px;
    }
    .cart-empty__title{
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 0.32px;
    }
    .cart-empty__text{
        color: #777;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        line-height: 145.4%;
        letter-spacing: 0.18px;
        margin-top: 10px;
    }
    .cart-empty__img{
        width: 300px;
        height: 255px;
        margin-top: 47px;
    }
    .cart-empty__btn{
        margin-top: 88px;
    }
    .cart-empty__btn-text{
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.24px;
        color: #FFF;
        margin: 0 auto 0 auto;
    }
</style>