<script setup>
import {onMounted} from "vue";
import TransactionForm from "@/components/TransactionForm.vue";
import LastsTransactions from "@/components/LastsTransactions.vue";

onMounted (() => {
})

</script>
<template>
  <div class="mt-8 px-5">
    <TransactionForm/>
    <LastsTransactions/>
  </div>
</template>

<style scoped>

</style>
