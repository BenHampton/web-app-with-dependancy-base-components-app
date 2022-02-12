<template>
    <div>
        <v-btn @click="onClick()">
        <span class="mr-2">{{ name }}</span>
      </v-btn>
    </div>
</template>

<script>
    export default {
        name: 'BaseButtton',
        props: {
            name: {
                type: String,
                required: true
            },
            onClick: {
                type: Function,
                required: true
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>