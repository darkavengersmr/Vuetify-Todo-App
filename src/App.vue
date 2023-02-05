<template>
  <v-app :theme="store.state.theme">        
      <router-view />    
  </v-app>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore()
</script>

<style>

</style>
