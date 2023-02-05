<template>    
      <v-toolbar>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <div class="toolbar-title">{{ title }}</div>      
        <v-spacer></v-spacer>
        <TotalTasks />        
        <SetTheme />
      </v-toolbar>
      <NavigationMenu />
  </template>
  
  <script setup>
  import {  defineProps } from "vue";
  import TotalTasks from '@/components/TotalTasks.vue';
  import SetTheme from '@/components/SetTheme.vue';
  import NavigationMenu from "@/components/NavigationMenu.vue"

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
  