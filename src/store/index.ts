import { createStore } from 'vuex'
import { mockTasks } from '@/mock-data/tasks'
import { ITask } from '@/interfaces'
import useTasks from '@/hooks/useTasks'

export default createStore({
  state: {
    tasks: mockTasks,
    theme: 'dark',
    searchFilter: '',
    navigationMenuActive: false
  },
  getters: {
    totalTasks(state) {      
      return state.tasks.length      
    },
    completedTasks(state) {      
      return state.tasks.filter(task => task.completed).length      
    },
    filteredTasks(state) {      
      if (state.searchFilter === '') return state.tasks      
      return state.tasks.filter(task => !task.title.toUpperCase().indexOf(state.searchFilter.toUpperCase()))
    },
  },
  mutations: {
    addTask(state, task: ITask) {      
      state.tasks.push(task)
    },
    changeTheme(state) {      
      state.theme = state.theme === 'dark' ? 'light' : 'dark'
    },
    setSearchFilter(state, searchInput: string) {      
      state.searchFilter = searchInput
    },
    setNavigationMenuActive(state, val) {      
      state.navigationMenuActive = val
    }
  },
  actions: {
    addTask(store, title: string) {      
      store.commit('addTask', {
        "userId": 1,
        "id": store.state.tasks.length+1,
        "title": title,
        "completed": false
      })
    },
    completeTask(store, id: number) {
      store.state.tasks = store.state.tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task)
    },
    removeTask(store, id: number) {
      store.state.tasks = store.state.tasks.filter(task => task.id !== id)
    },
    async loadTasks(store) {
      const {fetchTasks} = useTasks()
      store.state.tasks = await fetchTasks()
    }
  },
  modules: {
  }
})
