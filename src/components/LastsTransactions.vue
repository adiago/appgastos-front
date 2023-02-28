<script setup>
import { transactions } from "@/store";
import {onMounted} from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
library.add(faCircleNotch)

onMounted (() => {
})

</script>
<template>
  <div v-if="transactions.lasts.length">
    <v-table density="compact" theme="light">
      <tbody>
      <tr
          v-for="(item,idx) in transactions.lasts"
          :key="idx"
      >
        <td>{{ item.date }}</td>
        <td>{{ item.description }}</td>
        <td style="width:30%" :style="`color:`+item.user_color+`!important`">{{ item.amount }} €</td>
      </tr>
      </tbody>
    </v-table>
  </div>
  <div v-else class="center-page">
    <font-awesome-icon class="green fa-spin" :icon="['fas', 'circle-notch']"/>
  </div>
</template>

<style scoped>

</style>
