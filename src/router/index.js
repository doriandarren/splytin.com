import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue')
    },
    {
      path: '/resources',
      name: 'resources',
      component: () => import('@/components/template/Layout.vue'),
      children: [
        {
          path: '/resources/alerts',
          name: 'resources-alerts',
          component: () => import('@/views/tailwind_resources/components/alerts/Alert.vue')
        },
        {
          path: '/resources/forms',
          name: 'resources-forms',
          component: () => import('@/views/tailwind_resources/components/forms/Form.vue')
        },
        {
          path: '/resources/buttons',
          name: 'resources-buttons',
          component: () => import('@/views/tailwind_resources/components/buttons/Button.vue')
        },
        {
          path: '/resources/badges',
          name: 'resources-badges',
          component: () => import('@/views/tailwind_resources/components/badges/Badge.vue')
        },
        {
          path: '/resources/cards',
          name: 'resources-cards',
          component: () => import('@/views/tailwind_resources/components/cards/Card.vue')
        },
        {
          path: '/resources/avatars',
          name: 'resources-avatars',
          component: () => import('@/views/tailwind_resources/components/avatars/Avatar.vue')
        },
        {
          path: '/resources/paginations',
          name: 'resources-paginations',
          component: () => import('@/views/tailwind_resources/components/paginations/Pagination.vue')
        },
        {
          path: '/resources/breadcrumbs',
          name: 'resources-breadcrumbs',
          component: () => import('@/views/tailwind_resources/components/breadcrumbs/Breadcrumb.vue')
        },
      ]
    },


   
  ]
})

export default router
