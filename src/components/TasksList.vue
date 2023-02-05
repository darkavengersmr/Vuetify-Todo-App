<template>        
    <v-card
      v-for="task in tasks" :key="task.id"
      width="100%"
      class="card"
    >
    <v-btn
        @click="completeTask(task.id)"
        :class="{completed: task.completed}"
    >{{ task.title }}</v-btn>    
    <v-btn
        @click="removeTask(task.id)"
        prepend-icon='mdi-delete'
      />

    </v-card>

</template>
  
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: 'TasksList',
  setup() {
    const store = useStore()    

    const completeTask = (id: number) => {
        store.dispatch('completeTask', id)        
    }

    const removeTask = (id: number) => {
        store.dispatch('removeTask', id)        
    }

    return {
        tasks: computed(() => store.getters.filteredTasks),
        completeTask,
        removeTask
    }    
  },
  mounted() {
    //const store = useStore()
    //store.dispatch('loadTasks')
  }
});
</script>
  
<style scoped>
.completed {
  text-decoration: line-through;
  color:darkgrey;
}
.card {
  padding: 8px;
}
 </style>
  