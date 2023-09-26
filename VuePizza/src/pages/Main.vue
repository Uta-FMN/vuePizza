<script>
import categorySkeleton from '../components/category-skeleton.vue'
import pizzaCardSkeleton from '../components/pizza-skeleton.vue'
import pizzaCard from '../components/Pizza.vue'
import categoryButton from '../components/Filter.vue'
import sorting from '../components/Sorting.vue'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    categorySkeleton,
    pizzaCardSkeleton,
    pizzaCard,
    categoryButton,
    sorting
  },

  data() {
    return {
      pizzas: [],
      pizzaTypes: [
        {type: 'Все', id: 0}, {type: 'Мясные', id: 1}, {type: 'Вегетарианская', id: 2}, {type: 'Острые', id: 3}, {type: 'Гриль', id: 4}, {type: 'Закрытые', id: 5}
      ],
      sortingArr: [
        {"name": "популярности", "id": 0, "type": "rating"},
        {"name": "цене", "id": 1, "type": "price"},
        {"name": "алфавиту", "id": 2, "type": "name"}
  ],
      selectedSorting: "rating",
      selectedCategory: 0,
      isRendered: false
    };
  },
  
  methods: {
    ...mapActions(["fetchPizzas"]),

    async pagePreparations(){
      await this.fetchPizzas()
      this.isRendered = true
      this.pizzas = this.sortPizzas;
    },

    isSelected(i){
      this.selectedCategory = i
    },

    setSorting(obj){
      this.selectedSorting = obj.type
    },

    getCartAmmount(pizza){
      let pizzaAmmount = 0
      this.getCart.forEach(item => {
        if (pizza.name === item.name){
          pizzaAmmount += item.ammount
        }
      })
      return pizzaAmmount
    }
  },

  computed: {
    ...mapGetters(["getCart", "getPizzas"]),

    filterPizzas(){
      if (this.selectedCategory === 0){
        return this.sortPizzas
      }
      return this.sortPizzas.filter(pizza => {
        return this.selectedCategory == pizza.category
      })
    },

    sortPizzas(){
      const tempArr = JSON.parse(JSON.stringify(this.getPizzas))
      if(this.selectedSorting == "rating"){
        tempArr.sort((a, b) => b[this.selectedSorting] - a[this.selectedSorting])
      } else if(this.selectedSorting == "price"){
          tempArr.sort((a, b) => b[this.selectedSorting] - a[this.selectedSorting])
        } else if(this.selectedSorting == "name"){
            tempArr.sort((a, b) => a.name.localeCompare(b.name));
          }
            return tempArr

    }
  },

  created() {
    this.pagePreparations()
  }
};
</script>

<template>
    <div class="container">

      <div class="sorting-container">
        
        <ul class="category-list"> 
          <template v-if="!isRendered">
            <categorySkeleton v-for="(category, index) in 5" :key="index"></categorySkeleton>
          </template>
          <template v-else>
            <categoryButton :pizzaCategories="pizzaTypes" @selected-cathegory="isSelected" :selectedCategory="selectedCategory"></categoryButton>
          </template>
        </ul>

        <sorting :sortingArr="sortingArr" @filterResponse="setSorting"></sorting>

      </div>

      <h2 class="pizza-title">Все пиццы</h2>

      <div class="pizzas">

        <template v-if="!isRendered">
          <pizzaCardSkeleton v-for="(card, index) in 12" :key="index"></pizzaCardSkeleton>
        </template>
        <template v-else>
          <pizzaCard v-for="pizza in filterPizzas" :cartAmmount="getCartAmmount(pizza)" :pizza="pizza" :key="pizza.id"></pizzaCard>
        </template>

      </div>

    </div>
</template>

<style scoped>

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
  .sorting-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
  .category-list{
    display: flex;
    flex-direction: row;
    list-style-type: none;
}
  .pizzas{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 35px;
  }


</style>