import axios from "./index";

const URLS = {
    pizzas: "/pizzas",
    categories: "/categories",
    sortingArray: "/sortingArray"
}

export const getPizzas = async () => {
    return axios.get (URLS.pizzas).then((response) => response.data)
}

export const getCategories = async () => {
    return axios.get (URLS.categories).then((response) => response.data)
}

export const getSortingArray = async () => {
    return axios.get (URLS.sortingArray).then((response) => response.data)
}