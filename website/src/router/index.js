import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddDrinks from '../views/AddDrinks.vue'
import AboutView from '../views/AboutView.vue'
import StatisticsView from '../views/StatisticsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-drinks',
    name: 'Add Drinks',
    component: AddDrinks
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/statistics',
    name: 'StatisticsView',
    component: StatisticsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
