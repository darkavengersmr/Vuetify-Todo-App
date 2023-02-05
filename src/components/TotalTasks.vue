<template>        
    <div class="toolbar-title">Завершено {{ completedTasks }} из {{ tolalTasks }}</div>          
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore()    
const tolalTasks = computed(() => store.getters.totalTasks)
const completedTasks = computed(() => store.getters.completedTasks)

</script>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TotalTasks',
})
</script>

<style>
.toolbar-title {
  font-size: 20px;
  margin-left: 8px;
}
</style>
