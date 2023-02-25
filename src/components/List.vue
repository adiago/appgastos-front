<script setup>
import { transactions } from '@/store'
import {onMounted, ref} from "vue";
import Loading from "@/components/Loading.vue";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

onMounted (() => {
  transactions.getAll();
})
const data = ref(null)
const search = ref('')
const headers = ref([
  {text: "Fecha", value: "date", sortable: true},
  {text: "Descripción", value: "description"},
  {text: "Cantidad", value: "amount", sortable: true}
])
</script>

<template>
  <div v-if="!transactions.all.length" class="center">
    <Loading/>
  </div>
  <div v-else class="mt-8 px-5">
    <Vue3EasyDataTable
        alternating
        theme-color="dark"
        :headers="headers"
        :items="transactions.all"
    >
      <template #item-amount="item">
        <span :style="`color:`+item.user_color+`!important`">{{ item.amount }} €</span>
      </template>
    </Vue3EasyDataTable>
  </div>

</template>

<style scoped>
.center {
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
