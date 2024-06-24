import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Task1 from '../views/Task1.vue'
import Task2 from '../views/Task2.vue'
import Task3 from '../views/Task3.vue'
import Task4 from '../views/Task4.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/task1', component: Task1 },
  { path: '/task2', component: Task2 },
  { path: '/task3', component: Task3 },
  { path: '/task4', component: Task4 },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
