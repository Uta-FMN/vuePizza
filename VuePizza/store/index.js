import { createStore } from 'vuex'
import * as api from '../src/API/pizzas'
import cart from './modules/cart'

const store = createStore({
    modules: {
      cart
    },

    state: {
        pizzas: [],
        categories: [],
        sorting: []
    },

    actions: {

      async pizzasAPI({commit}){
        try {
          const data = await api.getPizzas()
            commit("setPizzas", data)
        }
        catch (error){
          console.error('Произошла ошибка: ', error)
        }
      },

      async categoriesAPI({commit}){
        try {
          const data = await api.getCategories()
            commit("setCategories", data)
        }
        catch (error){
          console.error('Произошла ошибка: ', error)
        }
      },

      async sortingAPI({commit}){
        try {
          const data = await api.getSortingArray()
            commit("setSorting", data)
        }
        catch (error){
          console.error('Произошла ошибка: ', error)
        }
      },
    },

    mutations: {
      setPizzas(state, data){
        state.pizzas = data
      },

      setCategories(state, data){
        state.categories = data
      },

      setSorting(state, data){
        state.sorting = data 
      }
    },
    
    getters: {
      getPizzas (state){
        return state.pizzas
      },

      getCategories (state){
        return state.categories
      },

      getSortingArray (state){
        return state.sorting
      },
    }
})

export default store;