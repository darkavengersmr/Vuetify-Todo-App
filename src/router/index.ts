import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TodosView from '../views/TodosView.vue'
import SettingsView from '../views/SettingsView.vue'
import HelpView from '../views/HelpView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'todos',
    component: TodosView
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
