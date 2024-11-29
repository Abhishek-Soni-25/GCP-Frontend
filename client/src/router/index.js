// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/homePageView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePageView  // This is where the NewsArticle component is now rendered
  },
  // You can add more routes if needed
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
