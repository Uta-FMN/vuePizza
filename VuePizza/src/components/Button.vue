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
        size: {
            type: String,
            validator: function (value){
                return["small", "medium", "large"].includes(value)
            },
            default: "small"
        }
    },

    methods: {
        clicked(){
            this.$emit('onClick')
        }
    },

    computed: {
        assignType(){
            return [`button--${this.type}`, `button--${this.size}`]
        },
    }
}
</script>

<template>
        <button @click="clicked" class="button" :class="this.assignType">
            <div class="button__inner-wrapper">
                <slot>
                    <p class="button__text">text</p>
                </slot>
            </div>
        </button>
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