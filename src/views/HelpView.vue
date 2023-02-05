<template>  
    <AppBar title="Справка" />           
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppBar from "@/components/AppBar.vue";

export default defineComponent({
name: "HelpView",
components: {
  AppBar  
},
});
</script>

<style scoped>
.toolbar-title {
font-size: 20px;
margin-left: 8px;
}
</style>
