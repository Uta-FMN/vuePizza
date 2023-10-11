<script>
export default {
    props: {
        type: {
            type: String,
            validator: function(value){
                return["default", "grey", "black"].includes(value)
            },
            default: "default"
        },
        route: {
            type: String,
            validator: function (value){
                return["none", "main", "cart"].includes(value)
            },
            default: "none"
        },
        size: {
            type: String,
            validator: function (value){
                return["small", "medium", "large"].includes(value)
            },
            default: "small"
        }
    },

    computed: {
        assignType(){
            return "button button--" + this.type + " button--" + this.size
        },

        assignRoute(){
            return "/" + this.route
        },
    }
}
</script>

<template>
    <template v-if="this.route !== 'none'">
        <component is="router-link" :to="this.assignRoute" :class="this.assignType">
            <div class="button__inner-wrapper">
                <slot>
                    <p class="button__text">text</p>
                </slot>
            </div>
        </component>
    </template>

    <template v-else>
        <div :class="this.assignType">
            <div class="button__inner-wrapper">
                <slot>
                    <p class="button__text">text</p>
                </slot>
            </div>
        </div>
    </template>
</template>

<style scoped>
.button{
    width: 211px;
    height: 55px;
    border-radius: 30px;
    padding: 17px 0 17px 0;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
}
.button--default{
    border: 1px solid #FE5F1E;
    background: #FE5F1E;  
}
.button--grey{
    border: 1px solid #D3D3D3;
    background: none
}
.button--black{
    border: 1px solid #282828;
    background: #282828;
}
.button--small{
    height: 40px;
    min-width: 132px;
    padding: 0px 18px;
}
.button--medium{
    min-width: 210px;
    height: 46px;
    border: 1px solid #D3D3D3;
}
.button--large{
    min-width: 211px;
    height: 55px;
    padding: 18px 0 16px 0;
}
.button__inner-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
}
.button--gray{
    background: none;
    border: 1px solid #D3D3D3;
}
.button__icon{
    height: 12px;
    width: 6px;
    margin-right: 15px;
}
.button__text{
    color: #CACACA;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
}
</style>