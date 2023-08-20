<script>
    export default{
        props: ['pizzaArr'],
        methods: {returnType(type){
      if(type === 0){
        return "тонкое"
      } else return "традиционное"
    }
    }}
</script>

<template>
    <div class="pizzas-container">
        <div class="pizza-container_card" v-for="pizza in pizzaArr" >
          <div class="card-picture">
            <img :src="pizza.imageUrl" alt="" class="card-img">
            <p class="card-name">{{ pizza.name }}</p>
          </div>

          <div class="card-info_container">
            <div class="card-info">
              <div class="types-container">
                <button class="type-btn" v-for="type in pizza.types" > {{ returnType(type) }} </button>
              </div>
              <div class="sizes-container">
                <button class="size-btn" v-for="size in pizza.sizes">{{ size }}</button>
              </div>


            </div>

            <div class="card-cost_container">
              <p class="card-price">от {{ pizza.price }} ₽</p>
              <button class="card-add_to_cart">
                <div class="card-plus_vector"></div>
                <p class="card-add_to_cart_text">Добавить</p>
                <div class="card-total"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
</template>



<style scoped>
.pizzas-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 35px;
  }
  .pizza-container_card{
    display: flex;
    flex-direction: column;
    width: 280px;
    min-height: 459px;
    align-items: center ;
    justify-content: space-between;
    margin-bottom: 65px;
    padding: 7px 4.78px 7px 5.73px;
  }
  .card-picture{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card-img{
    width: 260px;
    height: 260px;
  }
  .card-name{
    color: #000;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 0.2px;
  }
  .card-info{
    width: 280px;
    height: 85px;
    border-radius: 10px;
    background: #F3F3F3;
    display: flex;
    padding: 7px 4.78px 7px 5.73px;
    flex-direction: column;
    justify-content: space-between;
  }
  .type-btn, .size-btn{
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
  .selected-type-btn, .selected-type-btn {
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
  .types-container, .sizes-container{
    display: flex;
    width: 100%;
  }
  .card-plus_vector {
    width: 12px;
    height: 12px;
    display: inline-block;
    position: relative;
    margin-right: 8px;
  }
  
  .card-plus_vector::before,
  .card-plus_vector::after {
    content: '';
    position: absolute;
    background-color: white;
  }
  
  .card-plus_vector::before {
    width: 2px;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  
  .card-plus_vector::after {
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }

.card-price{
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.33px;
}
.card-cost_container{
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: center;
}
.card-add_to_cart_text{
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .card-add_to_cart{
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