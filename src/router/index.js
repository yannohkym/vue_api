import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'skill_index',
      component: () => import('../views/skills/skills_index.vue')
    },
    {
      path: '/skills/create',
      name: 'skill_create',
      component: () => import('../views/skills/skills_create.vue')
    },
    {
      path: '/skills/:id/edit',
      name: 'skill_edit',
      component: () => import('../views/skills/skills_edit.vue')
    }
  ]
})

export default router
