import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ConfigPage from '../views/Config.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/config',
    name: 'Config',
    component: ConfigPage,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
