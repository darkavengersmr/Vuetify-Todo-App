<template>
  <v-navigation-drawer v-model="drawer" temporary>
    <v-list-item class='list-item' prepend-icon="mdi-list-box" title="Мой список задач" @click="router.push('/')"></v-list-item>

    <v-divider></v-divider>

    <v-list-item class='list-item' prepend-icon="mdi-cog" title="Настройки" @click="router.push('settings')"></v-list-item>
    <v-list-item class='list-item' prepend-icon="mdi-help-box-outline" title="Справка" @click="router.push('help')"></v-list-item>

  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'NavigationMenu',
  setup() {
    const store = useStore()
    const router = useRouter()

    const drawer = ref(store.state.navigationMenuActive)

    watchEffect(() => drawer.value = store.state.navigationMenuActive)

    return {
      drawer,
      store,
      router
    }
  }
});
</script>

<style scoped>
.list-item {
  margin-top: 18px;
  font-size: 24px;
}

</style>
