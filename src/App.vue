<script setup>
import {ref, onMounted } from 'vue'
import List from './components/List.vue'
import Stats from './components/Stats.vue'
import TheFooter from "@/components/TheFooter.vue";
import Welcome from "@/components/Welcome.vue";
import { store,transactions } from "@/store";
import TheHeader from "@/components/TheHeader.vue";
import Loading from "@/components/Loading.vue";

const data = ref(null)

onMounted (() => {
  store.getSummary();
  store.getBalance();
  transactions.getLasts();
  transactions.getAll();
})
</script>

<template>
  <v-app v-if="!store.balance"
  theme="dark">
    <Loading :first-load="true"/>
  </v-app>
  <v-app v-else
  theme="dark">
    <TheHeader :debtor="store.debtor" :balance="store.balance"/>
    <v-main fluid>
      <Welcome v-show="store.page === ''" :transactions="transactions"/>
      <List v-show="store.page === 'lists'"/>
      <Stats v-show="store.page === 'stats'"/>
    </v-main>
    <v-bottom-navigation grow>
       <TheFooter/>
    </v-bottom-navigation>
  </v-app>
</template>

<style>

</style>
