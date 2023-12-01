import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: () => import('@/views/alerts/Alert.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import('@/views/forms/Form.vue')
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('@/views/buttons/Button.vue')
    },
    {
      path: '/badges',
      name: 'badges',
      component: () => import('@/views/badges/Badge.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('@/views/cards/Card.vue')
    },
    {
      path: '/avatars',
      name: 'avatars',
      component: () => import('@/views/avatars/Avatar.vue')
    },
    {
      path: '/paginations',
      name: 'paginations',
      component: () => import('@/views/paginations/Pagination.vue')
    },
    {
      path: '/breadcrumbs',
      name: 'breadcrumbs',
      component: () => import('@/views/breadcrumbs/Breadcrumb.vue')
    },
  ]
})

export default router
