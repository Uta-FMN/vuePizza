<script>
  import logo from './components/Logo.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default{
    components: {
      logo
    },

    data() {
      return {
        onMainPage: false,
      }
    },

    computed: {
      ...mapGetters(["getCart", "getCartAmmount", "getCartPrice"])
    },

    watch: {
      $route(to, from){
        this.onMainPage = to.name === 'Main'
      }
    },

    created() {
      this.onMainPage = this.$route.name === 'Main'
    },
  }
</script>


<template>
  <div ref="page" class="page-container">
    <div class="header">
      <logo></logo>
      <router-link to="/cart" v-if="onMainPage" class="cart-container">
        <div class="cart">
          <p class="cart__total">
            {{getCartPrice + " ₽"}}
          </p>
          <div class="cart__line"></div>
          <div class="cart__inner-container">
            <div class="cart__icon"></div>
            <p class="cart__total">
              {{getCartAmmount}}
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .page-container{
    height: 100%;
    width: 100%;
  }
  .header{
    padding: 49px 38px 35px 77px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #F6F6F6;
  }
  .cart-container{
    display: flex;
    align-items: flex-end;
    text-decoration: none;
  }

  .cart{
    border-radius: 30px;
    background: #FE5F1E;
    min-width: 150px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 23px 13px 23px;
  }

  .cart__line{
    width: 1px;
    height: 100%;
    border: 1px solid #FFFFFF40;
    margin: 0 13px 0 13px;
  }

  .cart__total{
    color: #FFF;
    font-weight: 700;
  }

  .cart__icon {
    height: 18px;
    width: 18px;
    background: url(./assets/cart_icon.svg);
    margin-right: 8px;
  }

  .cart__inner-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

</style>
