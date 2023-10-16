const isSelectedPizza = (pizza, selectedPizza) => {
    pizza.name === selectedPizza.name && 
    pizza.type === selectedPizza.type && 
    pizza.size === selectedPizza.size
}

export default {
    state: {
        cartArray: []
    },

    mutations: {
        addToCart(state, selectedPizza){
            const pizzaIndex = state.cartArray.findIndex((pizza) => isSelectedPizza(pizza, selectedPizza))
      
            if(pizzaIndex !== -1){
                state.cartArray[pizzaIndex].ammount++
            } else {
                selectedPizza.ammount = 1
                state.cartArray.push(selectedPizza);
            }
        },

        cartReduce(state, selectedPizza){
            const pizzaIndex = state.cartArray.findIndex((pizza) => isSelectedPizza(pizza, selectedPizza))

            if(state.cartArray[pizzaIndex].ammount > 1){
                state.cartArray[pizzaIndex].ammount--
            } else {
                state.cartArray.splice(pizzaIndex, 1)
            }
        },

        cartRemove(state, selectedPizza){
            const pizzaIndex = state.cartArray.findIndex((pizza) => isSelectedPizza(pizza, selectedPizza))
            state.cartArray.splice(pizzaIndex, 1)
        },
        
        cartClear(state, cartArray){
            state.cartArray = []
        }
    },

    getters: {
        getCart(state){
            return state.cartArray
        },

        getCartAmmount(state){
            let ammount = 0
            state.cartArray.forEach(pizza =>  {
                ammount += pizza.ammount
            })
            return ammount
        },

        getCartPrice(state){
            let price = 0
            state.cartArray.forEach(pizza =>  {
            price += pizza.price * pizza.ammount
            })
            return price
        }
    }
}