<template>
    <v-btn @click="setPage('lists')" class="navbar-item"
    :class="store.page ==='lists' ? 'active':''">
      <font-awesome-icon class="icon-footer fa-xl" :icon="['fas', 'list']" />
    </v-btn>
    <v-btn  @click="setPage('')" class="navbar-item"
       :class="store.page ==='' ? 'active':''">
      <font-awesome-icon class="icon-footer fa-xl" :icon="['fas', 'home']" />
    </v-btn>
    <v-btn  @click="setPage('stats')" class="navbar-item"
       :class="store.page ==='stats' ? 'active':''">
      <font-awesome-icon class="icon-footer fa-xl" :icon="['fas', 'chart-simple']" />
    </v-btn>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { store } from '@/store'

library.add(faHome, faSearch, faEnvelope)
function setPage(slug) {
  store.setPage(slug)
}
</script>

<style scoped>

</style>