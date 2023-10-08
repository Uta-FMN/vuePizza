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
      async get({commit}, type){

        switch (type) {
          case "pizzas":
            try {
              await api.getPizzas()
              .then((data) => {
                commit("set", {data: data, type: type})
              })
            }
            catch (error){
              console.error('Произошла ошибка: ', error)
            }
            break

          case "categories":
            try {
              await api.getCategories()
              .then((data) => {
                commit("set", {data: data, type: type})
              })
            }
            catch (error){
              console.error('Произошла ошибка: ', error)
            }
            break

          case "sorting":
            try {
              await api.getSortingArray()
              .then((data) => {
                commit("set", {data: data, type: type})
              })
            }
            catch (error){
              console.error('Произошла ошибка: ', error)
            }
            break
        }
      },
    },

    mutations: {
      set(state, payload){
        switch(payload.type){
          case "pizzas":
            state.pizzas = payload.data
            break

          case "categories":
            state.categories = payload.data
            break

          case "sorting":
            state.sorting = payload.data
            break
        }
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