<script>
  export default{
    props: {
      pizza: {
        type: Object,
        required: true
      }},
    methods: {
      returnType(type){
        if(type === 0){
        return "тонкое"
      } else return "традиционное"
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
          <button class="pizza__item" v-for="type in pizza.types" > {{ returnType(type) }} </button>
        </div>
        <div class="pizza__list">
          <button class="pizza__item" v-for="size in pizza.sizes">{{ size }}</button>
        </div>
      </div>

      <div class="pizza__bottom">
        <p class="pizza__price">от {{ pizza.price }} ₽</p>
        <button class="pizza__cart-button">
          <div class="pizza__icon"></div>
          <p class="pizza__text">Добавить</p>
          <div class="pizza__ammount"></div>
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
</style>