<template>
    <div>
        <BaseButton :name="buttonName" :onClick="homeOnClick"/>
    </div>
</template>

<script>
import BaseButton  from '../../components/BaseButton'
    export default {
        name: 'Home',
        components: { BaseButton },
        data() {
            return {
                buttonName: "Button Name"
            }
        },
        methods: {
           homeOnClick() {
               console.log("CLICK FROM HOME")
           } 
        }
    }
</script>

<style lang="scss" scoped>

</style>