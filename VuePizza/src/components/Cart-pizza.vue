<script>
    export default{
        props: {
            pizza: {
                type: Object,
                required: true
            }
        },

        computed: {
            getPizzaPrice(){
                return this.pizza.ammount * this.pizza.price
            }
        }
    }
</script>

<template>
    <div class="pizza">
        <div class="pizza__left-wrapper">
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

        <div class="pizza__right-wrapper">
            <div class="pizza__ammount-container">
                <button class="pizza__round-btn">
                    <div class="pizza__minus"></div>
                </button>
                <p class="pizza__ammount">{{ pizza.ammount }}</p>
                <button class="pizza__round-btn">
                    <div class="pizza__plus-horizontal"></div>
                    <div class="pizza__plus-vertical"></div>
                </button>
            </div>
            <p class="pizza__cost">{{ getPizzaPrice }} ₽</p>
            <button class="pizza__remove-btn">
                <div class="pizza__x-line"></div>
                <div class="pizza__x-line-2"></div>
            </button>
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
        justify-content: space-between;
    }
    .pizza__left-wrapper{
        display: flex;
        align-items: center;
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
    .pizza__right-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 40%;
    }
    .pizza__ammount-container{
        display: flex;
        align-items: center;
    }
    .pizza__round-btn{
        width: 32px;
        height: 32px;
        border: 2px solid #FE5F1E;
        border-radius: 50%;
        position: relative;
        background: none;
        cursor: pointer;
    }
    .pizza__minus{
        width: 10px;
        height: 2px;
        background-color: #FE5F1E;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .pizza__plus-horizontal, .pizza__plus-vertical {
        width: 10px;
        height: 2px;
        background-color: #FE5F1E;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .pizza__plus-vertical{
        transform: translate(-50%, -50%) rotate(90deg);
    }
    .pizza__ammount{
        margin: 0 12px 0 12px;
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.22px;
    }
    .pizza__cost{
        font-size: 22px;
        font-weight: 700;
        letter-spacing: 0.22px;
        margin: 0 12px 0 12px;
    }
    .pizza__remove-btn{
        width: 32px;
        height: 32px;
        border: 2px solid #D0D0D0;
        border-radius: 50%;
        position: relative;
        background: none;
        cursor: pointer;
    }
    .pizza__x-line {
        width: 10px;
        height: 2px;
        background-color: #D0D0D0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      
      .pizza__x-line-2 {
        width: 10px;
        height: 2px;
        background-color: #D0D0D0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      }

    
</style>