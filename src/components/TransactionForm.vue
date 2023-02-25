<script setup>
import { store, transactions } from '@/store'
import {onMounted, computed, ref} from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const tagSelected = ref(1)
const transactionTypeSelected = ref(1)
const amountSelected = ref(null)
const userSelected = ref(null)
const dateSelected = ref(null)
const descriptionSelected = ref(null)
const valid = ref(false)
const loadingTransaction = ref(false)

onMounted (() => {
  userSelected.value = store.currentUserId
})
const data = ref(null)

async function send() {
  let data = {
    'date': dateSelected.value,
    'transaction_type_id': transactionTypeSelected.value,
    'user_id': userSelected.value,
    'tag_id': tagSelected.value,
    'description': descriptionSelected.value,
    'amount': amountSelected.value
  }
  loadingTransaction.value = true
  let response = await transactions.send(data)
  if(response === 200) {
    cleanForm();
    await store.getBalance();
  }
  loadingTransaction.value = false
}

function cleanForm() {
  dateSelected.value = null
  transactionTypeSelected.value = 1
  tagSelected.value = 1
  descriptionSelected.value = null
  amountSelected.value = null
}
</script>

<template>
  <div>
      <v-form
          :disabled="loadingTransaction"
          ref="form"
          v-model="valid"
      >
        <VueDatePicker
            v-model="dateSelected"
            :clearable="true"
            :enable-time-picker="false"
            locale="es"
            auto-apply
            format="dd/MM/yyyy"
            dark
            class="pb-4"
        />

        <v-text-field
            type="number"
            v-model="amountSelected"
            label="Importe"
            prefix="€"
        ></v-text-field>

        <v-text-field
            v-model="descriptionSelected"
            label="Descripción"
            required
        ></v-text-field>

        <v-select
            v-model="tagSelected"
            :items="store.tags"
            item-title="name"
            item-value="id"
            density="compact"
            required
        ></v-select>

        <v-select
            v-model="transactionTypeSelected"
            :items="store.transactionType"
            item-title="name"
            item-value="id"
            density="compact"
            required
        ></v-select>

        <v-select
            v-model="userSelected"
            :items="store.users"
            item-title="name"
            item-value="id"
            density="compact"
            required
        ></v-select>
        <v-btn
            style=" left: 50%;-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);"
            color="success"
            class="mt-4"
            @click="send"
            :disabled="loadingTransaction"
        >
          <span v-if="!loadingTransaction">Añadir</span>
          <span v-else>
            <v-progress-circular
                class="center"
                :width="3"
                indeterminate
            ></v-progress-circular>
          </span>
        </v-btn>
      </v-form>
  </div>
</template>

<style scoped>
</style>
