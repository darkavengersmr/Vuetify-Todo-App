<template>                
      <v-btn
        @click="store.commit('changeTheme')"
        :prepend-icon="
          store.state.theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
        "
      />    
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore()   
</script>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'SetTheme',
})
</script>

<style>

</style>
