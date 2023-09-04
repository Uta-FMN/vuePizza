<template>
    <div class="category-skeleton"></div>
</template>


<style scoped>
    .category-skeleton {
        position: relative;
        width: 120px;
        height: 46px;
        border: none;
        border-radius: 30px;
        background-color: #F3F3F3;
        margin-right: 8.95px;
        overflow: hidden;
    }

    .category-skeleton::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
        animation: skeletonLoading 0.5s infinite;
    }

    @keyframes skeletonLoading {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
</style>