import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import TodosView from '../views/TodosView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'todos',
    component: TodosView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
