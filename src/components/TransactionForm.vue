<script setup>
import { store, transactions } from '@/store'
import {onMounted, computed, ref} from "vue";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const tagSelected = ref(1)
const transactionTypeSelected = ref(1)
const amountSelected = ref(null)
const userSelected = ref(null)
const dateSelected = ref(new Date())
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
        <v-container>
        <v-row>
          <v-col>
            <VueDatePicker
              v-model="dateSelected"
              :enable-time-picker="false"
              :clearable="false"
              locale="es"
              auto-apply
              format="dd/MM/yyyy"
              required
          >
              <template #dp-input="{ value, onInput, onEnter, onTab, onClear }">
                <v-text-field
                    :value="value"
                    variant="underlined"
                    density="compact"

                ></v-text-field>
              </template>
            </VueDatePicker>
          </v-col>
          <v-col>
            <v-text-field
                type="number"
                variant="underlined"
                v-model="amountSelected"
                label="Importe"
                prefix="€"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="descriptionSelected"
              variant="underlined"
              label="Descripción"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-select
                v-model="tagSelected"
                :items="store.tags"
                item-title="name"
                item-value="id"
                variant="underlined"
                density="compact"
                required
            ></v-select>
          </v-col>

        </v-row>
        <v-row>
          <v-col>
            <v-select
                v-model="transactionTypeSelected"
                :items="store.transactionType"
                item-title="name"
                item-value="id"
                variant="underlined"
                density="compact"
                required
            ></v-select>
          </v-col>
          <v-col>
            <v-select
                v-model="userSelected"
                :items="store.users"
                item-title="name"
                item-value="id"
                variant="underlined"
                density="compact"
                required
            ></v-select>
          </v-col>
        </v-row>
          <v-row>
          <v-btn
              style=" left: 50%;-ms-transform: translate(-50%, -50%);transform: translate(-50%, -50%);"
              color="success"
              class="mt-5"
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
          </v-row>
        </v-container>
      </v-form>
  </div>
</template>

<style scoped>
.v-col {
  padding-bottom: 0px;
  padding-top: 0px;
}
</style>
