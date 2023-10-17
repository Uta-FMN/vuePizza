<script>
  import { mapMutations } from 'vuex'

  export default{
    props: {
      pizza: {
        type: Object,
        required: true
      },
      cartAmmount: {
        type: Number,
      }
    },

    data(){
      return{
        selectedType: 0,
        selectedSize: 0,
      }
    },

    methods: {
      ...mapMutations(["addToCart"]),

      returnType(type){
        if(type === 0){
        return "тонкое"
      } else return "традиционное"
      },
      selectType(type){
        this.selectedType = type
      },
      selectSize(size){
        this.selectedSize = size
      },
      buildPizza(){
        const selectedPizza = {}
        selectedPizza.imageUrl = this.pizza.imageUrl
        selectedPizza.name = this.pizza.name
        selectedPizza.type = this.returnType(this.selectedType)
        selectedPizza.size = this.pizza.sizes[this.selectedSize]
        selectedPizza.price = this.pizza.price
        this.$emit("addToCart", selectedPizza)
      }
    }
  }
</script>

<template>

  <div class="pizza">
    <div class="pizza__top-container">
      <img :src="pizza.imageUrl" alt="" class="pizza__img">
      <p class="pizza__name">{{ pizza.name }}</p>
    </div>

    <div>
      <div class="types">
        <div class="pizza__list">
          <button v-for="(type, index) in pizza.types" :key="index" @click="selectType(index)" class="pizza__item" :class="{'pizza__item--selected':index == selectedType}"> {{ returnType(type) }} </button>
        </div>
        <div class="pizza__list">
          <button v-for="(size, index) in pizza.sizes" :key="index" @click="selectSize(index)" class="pizza__item" :class="{'pizza__item--selected':index == selectedSize}">{{ size }}</button>
        </div>
      </div>

      <div class="pizza__bottom">
        <p class="pizza__price">от {{ pizza.price }} ₽</p>
        <button class="pizza__cart-button" @click="buildPizza()">
          <div class="pizza__icon"></div>
          <p class="pizza__text">Добавить</p>
          <div v-if="cartAmmount > 0" class="pizza__ammount">{{cartAmmount}}</div>
        </button>
      </div>
    </div>
  </div>

</template>



<style scoped>
  .pizza{
    display: flex;
    flex-direction: column;
    width: 280px;
    min-height: 459px;
    align-items: center ;
    justify-content: space-between;
    margin-bottom: 65px;
    padding: 7px 4.78px 7px 5.73px;
  }
  .pizza__top-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .pizza__img{
    width: 260px;
    height: 260px;
  }
  .pizza__name{
    color: #000;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 0.2px;
  }
  .types{
    width: 280px;
    height: 85px;
    border-radius: 10px;
    background: #F3F3F3;
    display: flex;
    padding: 7px 4.78px 7px 5.73px;
    flex-direction: column;
    justify-content: space-between;
  }
  .pizza__item{
    flex: 1;
    margin: 0 3.5px;
    border-radius: 5px;
    border: none;
    height: 32px;
    text-align: center;
    color: #2C2C2C;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.21px;
    cursor: pointer;
  }
  .pizza__item--selected {
    flex: 1;
    margin: 0 3.5px;
    border-radius: 5px;
    background: #FFF;
    border: none;
    height: 32px;
    text-align: center;
    color: #2C2C2C;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.21px;
    cursor: pointer;
  }
  .pizza__list{
    display: flex;
    width: 100%;
  }
  .pizza__icon {
    width: 12px;
    height: 12px;
    display: inline-block;
    position: relative;
    margin-right: 8px;
  }
  
  .pizza__icon::before,
  .pizza__icon::after {
    content: '';
    position: absolute;
    background-color: white;
  }
  
  .pizza__icon::before {
    width: 2px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  
  .pizza__icon::after {
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

.pizza__price{
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.33px;
}
.pizza__bottom{
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: center;
}
.pizza__text{
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .pizza__cart-button{
    display: flex;
    align-items: center;
    height: 40px;
    min-width: 132px;
    padding: 0px 18px;
    border-radius: 30px;
    border: 1px solid #FE5F1E;
    background: #FE5F1E;
    cursor: pointer;
  }
  .pizza__ammount {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8px;
    padding: 0 7px;
    min-width: 22px;
    height: 22px;
    border-radius: 11px;
    background: white;
    color: #FE5F1E;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    font-weight: 700;
  }
</style>