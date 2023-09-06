<script>
    export default {
        props: {
            pizzaCategories: {
                type: Object,
                required: true
            },
            selectedCategory: {
                type: Number,
                required: true
            }
        },
        emits: ['selectedCathegory']}
</script>

<template>

        <li v-for="(type, index) in pizzaCategories" :key="type.id" class="category" >
            <button @click="$emit('selected-cathegory', type.id)" class="category__button" :class="{'category__button_selected':type.id == selectedCategory}" type="button">{{ type.type }}</button>
        </li>

</template>

<style scoped>
    .category{
        margin-right: 8.95px;
        border-radius: 30px;
    }
    .category__button{
    border-radius: 30px;
    height: 46px;
    color: #2C2C2C;
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.24px;
    border: none;
    padding: 0 30px 0 30px;
    cursor: pointer;
    }

    .category__button_selected{
    border-radius: 30px;
    height: 46px;
    color: #FFF;
    text-align: center;
    font-weight: 700;
    letter-spacing: 0.24px;
    border: none;
    padding: 0 30px 0 30px;
    cursor: pointer;
    background: #282828;
    }
</style>