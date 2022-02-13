<template>
  <v-container>
    <v-row class="text-center">

      <v-col
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          TEST 1
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          Base Component Button From base-components-library
        </v-row>
      </v-col>

       <v-col
        class="mb-5"
        cols="12"
      >
        <v-row justify="center">
          <BaseButton :name="buttonName" :onClick="onMyClick"/>
        </v-row>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        buttonName: 'Test Name'
      }
    },
    methods: {
      onMyClick() {
        console.log("we are working!!")
      }
    }
  }
</script>
