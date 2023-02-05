<template>
  <v-app :theme="store.state.theme" @click="closeMenu">
    <router-view />
  </v-app>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore()
const closeMenu = () => { if (store.state.navigationMenuActive) store.commit('setNavigationMenuActive', false) }
</script>

<style>

</style>
