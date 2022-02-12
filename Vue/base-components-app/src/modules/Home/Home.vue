<template>
    <div>
        <BaseButton name="buttonName" :onClick="homeOnClick"/>
    </div>
</template>

<script>
import BaseButton  from '../../components/Button/BaseButton'
    export default {
        name: 'Home',
        components: { BaseButton },
        methods: {
           homeOnClick() {
               console.log("CLICK FROM HOME")
           } 
        }
    }
</script>

<style lang="scss" scoped>

</style>