<template>
      <AppBar title="Список дел" />      
      <TasksList />
      <AddTask />
      <SearchFilter />    
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "@/components/AppBar.vue";
import TasksList from "@/components/TasksList.vue";
import AddTask from "@/components/AddTasks.vue";
import SearchFilter from "@/components/SearchFilter.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    AppBar,
    TasksList,
    AddTask,
    SearchFilter
  },
});
</script>

<style scoped>
.toolbar-title {
  font-size: 20px;
  margin-left: 8px;
}
</style>
