<script>
    export default{
        props: {
            pizza: {
                type: Object,
                required: true
            }
        }
    }
</script>

<template>
    <div class="pizza">
        <img :src="pizza.imageUrl" :alt="pizza.name" class="pizza__image">
        <div class="pizza__text-wrapper">
            <p class="pizza__name">
                {{ pizza.name }}
            </p>
            <p class="pizza__description">
                {{ pizza.type }} тесто, {{ pizza.size }} см.
            </p>
        </div>
    </div>
</template>

<style scoped>
    .pizza{
        width: 100%;
        display: flex;
        align-items: center;
        padding: 30px 0 30px 0;
        border-top: 1px solid #F4F4F4;
    }
    .pizza__image{
        width: 80px;
        height: 80px;
        margin-right: 15px;
    }
    .pizza__text-wrapper{
        display: flex;
        flex-direction: column;
    }
    .pizza__name{
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.22px;
    }
    .pizza__description{
        color: #8D8D8D;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 0.18px;
    }
</style>