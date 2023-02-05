<template>    
    <input v-model="searchInput"            
           class="input"
           placeholder="Поиск..."
           
    >    
</template>
  
<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: 'SearchFilter',
  setup() {
    const store = useStore()        
    const searchInput = ref('')        

    watchEffect(() => store.commit('setSearchFilter', searchInput.value))

    return {
        searchInput
    }
  }
});
</script>
  
<style scoped>
.input {
  position: fixed;
  bottom: 40px;
  left: 40px;  
  background-color: black;

  
  font-size: 20px;
  border-color: white;
  border-style: solid;
  border-width: 1px; 
  border-radius: 4px;
  width: 200px;
  padding: 4px 8px 4px 8px;
}

 </style>
  