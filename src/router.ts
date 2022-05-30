import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import SessionViewPage from '@/pages/SessionViewPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'home',
    },
    {
      path: '/sessions/:id',
      component: SessionViewPage,
      name: 'session-view',
    },
  ],
})

export default router
