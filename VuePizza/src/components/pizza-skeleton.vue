<template>
    <div class="skeleton">
        <div class="skeleton__img"></div>
        <div class="skeleton__name"></div>
        <div class="skeleton__info"></div>
        <div class="skeleton__cart-list">
            <div class="skeleton__cart-item"></div>
            <div class="skeleton__cart-item"></div>
        </div>
    </div>
</template>

<style scoped>
@keyframes skeletonLoading {
    0% {
        transform: translateX(-100%);
        }
    100% {
        transform: translateX(100%);
        }
    }
    .skeleton,
    .skeleton__img,
    .skeleton__name,
    .skeleton__info,
    .skeleton__cart-item {
        position: relative;
        overflow: hidden;
    }
    .skeleton::before,
    .skeleton__img::before,
    .skeleton__cart-item::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
        animation: skeletonLoading 1s infinite;
    }
    .skeleton {
        width: 280px;
        height: 459px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 65px;
    }
    .skeleton__img {
        width: 260px;
        height: 260px;
        border-radius: 130px;
        background-color: #F3F3F3;
        margin-top: 11px;
    }
    .skeleton__name {
        width: 280px;
        height: 24px;
        margin-top: 11px;
        background-color: #F3F3F3;
        border-radius: 5px;
    }
    .skeleton__info {
        width: 280px;
        height: 85px;
        border-radius: 10px;
        margin-top: 22px;
        background-color: #F3F3F3;
    }
    .skeleton__cart-list {
        width: 280px;
        display: flex;
        justify-content: space-between;
        margin-top: 17px;
    }
    .skeleton__cart-item {
        height: 40px;
        width: 132px;
        border-radius: 30px;
        background-color: #F3F3F3;
    }
</style>