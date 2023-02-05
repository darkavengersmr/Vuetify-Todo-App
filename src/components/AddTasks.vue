<template>
    <v-btn
      class="add-button"
      color="blue-grey"
      icon="mdi-plus"
      size="80px"      
      @click="dialog = true"
    ></v-btn>

    <v-dialog
      v-model="dialog"
      persistent
          
    >           
      <v-card>
        <v-card-title class="text-h5">
          Добавить новое дело
        </v-card-title>        
        <input v-model="task"
               ref="addInput"
               class="input" 
               @keypress.enter="addTask"               
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn            
            variant="text"
            @click="task = ''; dialog = false"
          >
            Отмена
          </v-btn>
          <v-btn            
            variant="text"
            @click="addTask"            
          >
            Добавить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>    
</template>
  
<script lang="ts">
import { defineComponent, ref, nextTick, watchEffect } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: 'AddTodo',
  setup() {
    const store = useStore()    
    const dialog = ref(false)
    const task = ref('')
    const addInput = ref()    

    const addTask = () => {
      if (task.value.length > 0) {
        dialog.value = false
        store.dispatch('addTask', task.value)        
        task.value = ''
      }
    }

    watchEffect(() => {
          const watched = dialog.value
          nextTick(() => {if(watched) addInput.value.focus()}) 
          
    })

    return {
        task,
        addTask,
        addInput,
        dialog
    }
  }
});
</script>
  
<style scoped>
.input {  
  margin: 20px 20px 20px 20px;  
  font-size: 24px;
  border-color: white;
  border-style: solid;
  border-width: 1px; 
  border-radius: 4px;
  padding: 4px 8px 4px 8px;
}

.add-button {
  position: fixed;
  bottom: 40px;
  right: 40px;
}

 </style>
  