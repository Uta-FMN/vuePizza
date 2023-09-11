export default {
    state: {
        cartArray: []
    },
    mutations: {
        addToCart(state, selectedPizza){
            const pizzaIndex = state.cartArray.findIndex((pizza) => 
            pizza.name == selectedPizza.name && 
            pizza.type == selectedPizza.type && 
            pizza.size == selectedPizza.size)
      
            if(pizzaIndex !== -1){
                state.cartArray[pizzaIndex].ammount++
            } else {
                selectedPizza.ammount = 1
                state.cartArray.push(selectedPizza);
            }
        }
    },
    getters: {
        getCart(state){
            return state.cartArray
        }
    }
}