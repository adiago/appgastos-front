<script setup>
import { transactions } from '@/store'
import {onMounted, ref} from "vue";
import Loading from "@/components/Loading.vue";

onMounted (() => {
  transactions.getAll();
})
const data = ref(null)
const search = ''
</script>

<template>
  <div v-if="!transactions.all.length" class="center">
    <Loading/>
  </div>
  <div v-else class="mt-8 px-5">
    <v-table>
      <tbody>
      <tr
          v-for="(item,idx) in transactions.all"
          :key="idx"
      >
        <td>{{ item.date }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.amount }}€</td>
      </tr>
      </tbody>
    </v-table>
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
