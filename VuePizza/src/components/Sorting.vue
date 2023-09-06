<script>
export default {
    props: {sortingArr: {
        type: Array,
        required: true,
    }},
    data() {
        return {
            dropDownOpened: false,
            selectedFilter: 0
        }
    },
    methods:{
        arrowRotation(){
            this.dropDownOpened = !this.dropDownOpened
        },
        setNewSorting(type){
            this.arrowRotation(), 
            this.selectedFilter=type.id, 
            this.$emit('filterResponse', type)
        }
    },
}
</script>

<template>
    <div class="sorting-menu">
        <div class="sorting-menu__arrow" :class="{'active': dropDownOpened}"></div>
        <p class="sorting-menu__text">Сортировка по: </p>
        <button class="sorting-menu__button" @click="arrowRotation" type="button">{{sortingArr[selectedFilter].name }}</button>
        <ul v-if="dropDownOpened" class="sorting-menu__dropdown-list" >
            <li 
                v-for="type in sortingArr" 
                @click="setNewSorting(type)" 
                :key="type.id" 
                class="sorting-menu__item" 
                :class="{'sorting-menu__item_selected':type.id == selectedFilter}">
                {{ type.name }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .sorting-menu{
        align-items: center;
        display: flex;
        height: 17px;
        margin-bottom: 16px;
        align-self: flex-end;
        position: relative;
        min-width: 252.22px;
    }
    .sorting-menu__arrow {
        background-image: url(../assets/Vector.svg);
        background-repeat: no-repeat;
        width: 10px;
        height: 5.63px;
        margin-right: 7px;
        transition: transform 0.3s;
        display: inline-block;
        transform-origin: center;
    }

    .sorting-menu__arrow.active {
        transform: rotate(-180deg);
    }

    .sorting-menu__text{
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.21px;
        margin-right: 8px;
    }
    .sorting-menu__button{
        background: none;
        border: none;
        border-bottom: 1px dotted #FE5F1E;
        color: #FE5F1E;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 0.21px;
        cursor: pointer;
    }
    .sorting-menu__dropdown-list{
        list-style: none;
        position: absolute;
        top: calc(100% + 10px);
        min-width: 140px;
        border-radius: 10px;
        right: 0;
        padding: 13px 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
        background: white;
    }
    .sorting-menu__item{
        color: #000;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.21px;
        padding: 10px 14px 11px 14px;
        cursor: pointer;
    }

    .sorting-menu__item_selected{
        color: #FE5F1E;
        font-weight: 700;
        background: #FE5F1E0D;
        cursor: default;
    }
</style>