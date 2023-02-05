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
  bottom: 20px;
  left: 20px;  

  margin: 20px 20px 20px 20px;  
  font-size: 24px;
  border-color: white;
  border-style: solid;
  border-width: 1px; 
  border-radius: 4px;
  width: 200px;
  padding: 4px 8px 4px 8px;
}

 </style>
  