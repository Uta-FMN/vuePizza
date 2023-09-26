import { createRouter, createWebHashHistory } from 'vue-router'
import main from "./pages/main.vue"
import cart from "./pages/cart.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/main', name: 'Main', component: main, alias: '/'},
        {path: '/cart', name: 'Cart', component: cart}
    ]
})