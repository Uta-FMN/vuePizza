function findIndex(state, selectedPizza){
    return state.cartArray.findIndex((pizza) => 
    pizza.name == selectedPizza.name && 
    pizza.type == selectedPizza.type && 
    pizza.size == selectedPizza.size)
}

export default {
    state: {
        cartArray: []
    },

    mutations: {
        addToCart(state, selectedPizza){
            const pizzaIndex = findIndex(state, selectedPizza)
      
            if(pizzaIndex !== -1){
                state.cartArray[pizzaIndex].ammount++
            } else {
                selectedPizza.ammount = 1
                state.cartArray.push(selectedPizza);
            }
        },

        cartReduce(state, selectedPizza){
            const pizzaIndex =  findIndex(state, selectedPizza)

            if(state.cartArray[pizzaIndex].ammount > 1){
                state.cartArray[pizzaIndex].ammount--
            } else {
                state.cartArray.splice(pizzaIndex, 1)
            }
        },

        cartRemove(state, selectedPizza){
            const pizzaIndex = findIndex(state, selectedPizza)
            state.cartArray.splice(pizzaIndex, 1)
        },
        
        cartClear(state, cartArray){
            state.cartArray = []
        }
    },

    getters: {
        getCart(state){
            return state.cartArray
        }
    }
}