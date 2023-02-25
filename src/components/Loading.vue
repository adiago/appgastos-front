<template>
  <div class="center">
    <div v-if="props.firstLoad" class="center">
      <h1 class="text-center" style="top:30%">Hola,</h1>
      <h1 class="text-center" style="top:30%">{{ currentUser }}!</h1>
    </div>
    <v-progress-circular
        class="center"
        indeterminate
    ></v-progress-circular>
  </div>
</template>

<script setup>
import {ref} from "vue";
import { store } from '@/store'

const currentUser = ref(store.currentUserName)

const props = defineProps({
  firstLoad: {
    type: Boolean,
    default: false
  }
})

</script>

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