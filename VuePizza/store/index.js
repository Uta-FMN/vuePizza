import { createStore } from 'vuex'
import axios from 'axios';
import cart from './modules/cart'

const store = createStore({
    modules: {
      cart
    },

    state: {
        pizzas: []
    },

    actions: {
      async fetchPizzas({commit}){
        try {
          const res = await axios.get('http://localhost:3000/pizzas')
          commit("setPizzas", res.data)
        }
        catch (error){
          console.error('Произошла ошибка:', error)
        }
      }
    },

    mutations: {
      setPizzas(state, pizzas){
        state.pizzas = pizzas
      }
    },
    
    getters: {
      getPizzas (state){
      return state.pizzas
    }
    }
})

export default store;