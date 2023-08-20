<script>
import myskeleton from './components/skeleton.vue'
import pizzasContainer from './components/pizzas-container.vue'

export default {
  name: 'App',
  components: {
    myskeleton,
    pizzasContainer
  },
  data() {
    return {
      pizzaTypes: [
        {type: 'Все', id: 0, cls: 'pizza_list_selectedBtn'}, {type: 'Мясные', id: 1, cls: 'pizza-list_button'}, {type: 'Вегетарианская', id: 2, cls: 'pizza-list_button'}, {type: 'Острые', id: 3, cls: 'pizza-list_button'}, {type: 'Гриль', id: 4, cls: 'pizza-list_button'}, {type: 'Закрытые', id: 5, cls: 'pizza-list_button'}
      ],
      pizzas: [
    {
      "id": 0,
      "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
      "name": "Пепперони Фреш с перцем",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 803,
      "category": 0,
      "rating": 4
    },
    {
      "id": 1,
      "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
      "name": "Сырная",
      "types": [0],
      "sizes": [26, 40],
      "price": 245,
      "category": 1,
      "rating": 6
    },
    {
      "id": 2,
      "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
      "name": "Цыпленок барбекю",
      "types": [0],
      "sizes": [26, 40],
      "price": 295,
      "category": 1,
      "rating": 4
    },
    {
      "id": 3,
      "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
      "name": "Кисло-сладкий цыпленок",
      "types": [1],
      "sizes": [26, 30, 40],
      "price": 275,
      "category": 2,
      "rating": 2
    },
    {
      "id": 4,
      "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
      "name": "Чизбургер-пицца",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 415,
      "category": 3,
      "rating": 8
    },
    {
      "id": 5,
      "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
      "name": "Крэйзи пепперони",
      "types": [0],
      "sizes": [30, 40],
      "price": 580,
      "category": 2,
      "rating": 2
    },
    {
      "id": 6,
      "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
      "name": "Пепперони",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 675,
      "category": 1,
      "rating": 9
    },
    {
      "id": 7,
      "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
      "name": "Маргарита",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 450,
      "category": 4,
      "rating": 10
    },
    {
      "id": 8,
      "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
      "name": "Четыре сезона",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 395,
      "category": 5,
      "rating": 10
    },
    {
      "id": 9,
      "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
      "name": "Овощи и грибы 🌱",
      "types": [0, 1],
      "sizes": [26, 30, 40],
      "price": 285,
      "category": 5,
      "rating": 7
    }
  ],
      selectedType: 0,
      pizzasArr: [],
      isRendered: false
    };
  },
  methods: {
    isSelected(i){
      this.selectedType = i
    }
 },
  computed: {
    filterPizzas(){
      if (this.selectedType === 0){
        return this.pizzas
      }
      return this.pizzas.filter(pizza => {
        return this.selectedType == pizza.category
      })
    }
 }, 
  // beforeCreate(){console.log("beforeCreate")},
  // created(){console.log("created " + this.selectedType)},
  // beforeMount(){console.log("beforeMount")},
  // mounted(){console.log("mounted")},
  // beforeUpdate(){console.log("beforeUpdate")},
  // updated(){console.log("updated")},
  // beforeDestroy(){console.log("beforeDestroy")},
  // destroyed(){console.log("destroyed")}
  mounted(){
    setTimeout(() => {this.isRendered = true}, 5000)
  }
};
</script>

<template>
  <myskeleton v-if="isRendered === false"></myskeleton>
  <div v-if="isRendered" ref="page" class="page-container">
    <div class="header">
      <div class="header_label">
        <div class="header-logo"></div>
        <div class="header-pizza">
          <h1 class="header-text">REACT PIZZA</h1>
          <p class="header-paragraph">самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div class="header_cart-container">
        <div class="header_cart">
          <p class="header-total">
            520 ₽
          </p>
          <div class="header-cart_line"></div>
          <div class="header-cart_info">
            <div class="header-cart_icon"></div>
            <p class="header-cart_total_items">
              3
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      
      <h2 class="pizza-title">Все пиццы</h2>

      <pizzasContainer :pizzaArr="filterPizzas"></pizzasContainer>

    </div>
  </div>
</template>

<style scoped>

  .page-container{
    height: 100%;
    width: 100%;
  }
  .skeleton{
    height: 100%;
    width: 100%;
    background: red;
  }
  .header{
    padding: 49px 38px 35px 77px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #F6F6F6;
  }

  .header_label{
    display: flex;
  }

  .header-pizza{
    margin: 0 0 5px 17px;
    height: 48px;
  }

  .header-logo{
    width: 38px;
    height: 38px;
    background: url(assets/PizzaLogo.svg);
    margin: 5px 0 10px 0;
  }

  .header-text{
    color: #181818;
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 0.24px;
  }

  .header-paragraph{
    color: #7B7B7B;
    font-weight: 400;
  }

  .header_label p{
    font-size: 16px;
    font-style: normal;
  }

  .header_cart-container{
    display: flex;
    align-items: flex-end;
  }

  .header_cart{
    border-radius: 30px;
    background: #FE5F1E;
    min-width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 12px 23px 13px 23px;
  }

  .header-cart_line{
    width: 1px;
    height: 100%;
    border: 1px solid #FFFFFF40;
    margin: 0 13px 0 13px;
  }

  .header-total, .header-cart_total_items{
    color: #FFF;
    font-weight: 700;
  }

  .header-cart_icon {
    height: 18px;
    width: 18px;
    background: url(assets/cart_icon.svg);
    margin-right: 8px;
  }

  .header-cart_info{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container {
    padding: 40px 48px 35px 67px;
    display: flex;
    flex-direction: column;
  }

  .pizza-title{
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.32px;
    margin-top: 32px;
  }


</style>
