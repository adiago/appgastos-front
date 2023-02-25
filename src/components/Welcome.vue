<script setup>
import TransactionForm from "@/components/TransactionForm.vue";
import LastsTransactions from "@/components/LastsTransactions.vue";

const props = defineProps({
  transactions: Object
})

</script>
<template>
  <div class="mt-8 px-5">
    <TransactionForm/>
    <LastsTransactions v-show="props.transactions"/>
  </div>
</template>

<style scoped>

</style>
