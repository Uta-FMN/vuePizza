<script>
    export default {
        props: [],
        data(){
            return {
                
            }
        }
    }
</script>

<template>
    <div class="sorting_menu">
        <ul class="sorting-menu_pizza-list">
            <li v-for="(type, index) in pizzaTypes" :key="type.id" class="pizza-list_item" >
                <button @click="isSelected(type.id)" class="pizza-list_button" :class="{'pizza_list_selectedBtn':type.id == selectedType}" type="button">{{ type.type }}</button>
            </li>
        </ul>

        <div class="sorting-menu_sorting-bar">
        <div class="sorting-menu_vector"></div>
            <p class="sorting-menu_paragraph">Сортировка по: </p>
            <button class="sorting-menu_drop-down-button" type="button">популярности</button>
        </div>
    </div>
</template>

<style scoped>
    .sorting_menu{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .sorting-menu_pizza-list{
        display: flex;
        flex-direction: row;
        list-style-type: none;
    }
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
    .sorting-menu_sorting-bar{
        align-items: center;
        display: flex;
        height: 17px;
        margin-bottom: 16px;
        align-self: flex-end;
    }

    .sorting-menu_vector{
    background: url(assets/Vector.svg) no-repeat;
    width: 10px;
    height: 5.63px;
    margin-right: 7px;
    }

    .sorting-menu_paragraph{
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.21px;
    margin-right: 8px;
    }

    .sorting-menu_drop-down-button{
    background: none;
    border: none;
    border-bottom: 1px dotted #FE5F1E;
    color: #FE5F1E;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.21px;
    cursor: pointer;
    }
</style>