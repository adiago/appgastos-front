<script setup>
import { store, transactions } from '@/store'
import {onMounted, ref} from "vue";

const tagSelected = ref(1)
const transactionTypeSelected = ref(1)
const amountSelected = ref(null)
const userSelected = ref(1)
const dateSelected = ref(null)
const descriptionSelected = ref(null)
const valid = ref(false)


onMounted (() => {
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
  let response = await transactions.send(data)
  if(response === 200) {
    cleanForm()
  }
}

function cleanForm() {
  dateSelected.value = null
  transactionTypeSelected.value = 1
  userSelected.value = 1
  tagSelected.value = 1
  descriptionSelected.value = null
  amountSelected.value = null
}
</script>

<template>
  <div>
      <v-form
          ref="form"
          v-model="valid"
      >
<!--        <v-date-picker-->
<!--            v-model="dateSelected"-->
<!--            class="mt-4"-->
<!--            min="2016-06-15"-->
<!--            max="2018-03-20"-->
<!--        ></v-date-picker>-->

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
        >
          Añadir
        </v-btn>
      </v-form>
  </div>
</template>

<style scoped>
</style>
