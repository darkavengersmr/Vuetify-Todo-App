<template>
  <v-toolbar>
    <v-app-bar-nav-icon @click.stop="store.commit('setNavigationMenuActive', true)"></v-app-bar-nav-icon>
    <div class="toolbar-title">{{ title }}</div>
    <v-spacer></v-spacer>
    <slot></slot>    
  </v-toolbar>
  <NavigationMenu />
</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from "vuex";
import NavigationMenu from "@/components/NavigationMenu.vue"

const store = useStore()

const props = defineProps({
  title: String
})
</script>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppBar',
})
</script>

<style>
.toolbar-title {
  font-size: 20px;
  margin-left: 8px;
}
</style>
