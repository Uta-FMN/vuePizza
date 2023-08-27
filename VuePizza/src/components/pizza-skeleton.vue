<script>
    export default{}
</script>

<template>
    <div class="card-skeleton_container">
        <div class="image-skeleton"></div>
        <div class="name-skeleton"></div>
        <div class="info-skeleton"></div>
        <div class="buying-skeleton">
            <div class="buying-skeleton_item"></div>
            <div class="buying-skeleton_item"></div>
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
    .card-skeleton_container,
    .image-skeleton,
    .name-skeleton,
    .info-skeleton,
    .buying-skeleton_item {
        position: relative;
        overflow: hidden;
    }
    .card-skeleton_container::before,
    .image-skeleton::before,
    .buying-skeleton_item::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
        animation: skeletonLoading 1s infinite;
    }
    .card-skeleton_container {
        width: 280px;
        height: 459px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 65px;
    }
    .image-skeleton {
        width: 260px;
        height: 260px;
        border-radius: 130px;
        background-color: #F3F3F3;
        margin-top: 11px;
    }
    .name-skeleton {
        width: 280px;
        height: 24px;
        margin-top: 11px;
        background-color: #F3F3F3;
        border-radius: 5px;
    }
    .info-skeleton {
        width: 280px;
        height: 85px;
        border-radius: 10px;
        margin-top: 22px;
        background-color: #F3F3F3;
    }
    .buying-skeleton {
        width: 280px;
        display: flex;
        justify-content: space-between;
        margin-top: 17px;
    }
    .buying-skeleton_item {
        height: 40px;
        width: 132px;
        border-radius: 30px;
        background-color: #F3F3F3;
    }
</style>