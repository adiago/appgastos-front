<template>
  <v-app-bar :elevation="5"
             class="py-2"
             style="border-radius: 0 0 35px 35px"
             :style="'background-color:'+props.debtor.color"
>
    <v-spacer/>
<!--    {{props.debtor.name}}-->
    <div v-show="props.debtor">
      <h2 class="text-white" style="font-size:xxx-large;font-family: Futura">{{props.balance}}€</h2>
    </div>
    <v-spacer/>
  </v-app-bar>
</template>

<script setup>
const props = defineProps(['debtor','balance'])

</script>

<style scoped>

</style>