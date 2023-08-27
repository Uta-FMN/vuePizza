<script>
    export default {
        props: [
            'pizzaCategories',
            'selectedCategory'
        ]
        }
</script>
<!-- @click="isSelected(type.id)" -->
<template>

        <li v-for="(type, index) in pizzaCategories" :key="type.id" class="pizza-list_item" >
            <button @click="$emit('selected-cathegory', type.id)" class="pizza-list_button" :class="{'pizza_list_selectedBtn':type.id == selectedCategory}" type="button">{{ type.type }}</button>
        </li>

</template>

<style scoped>
    .pizza-list_item{
        margin-right: 8.95px;
        border-radius: 30px;
    }
    .pizza-list_button{
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

    .pizza_list_selectedBtn{
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