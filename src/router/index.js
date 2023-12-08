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
        //Routes components
        {
          path: '/tailwind/resources/component/alerts',
          name: 'tailwind-resources-component-alerts',
          component: () => import('@/views/tailwind/resources/components/alerts/Alert.vue')
        },
        {
          path: '/tailwind/resources/component/forms',
          name: 'tailwind-resources-component-forms',
          component: () => import('@/views/tailwind/resources/components/forms/Form.vue')
        },
        {
          path: '/tailwind/resources/component/buttons',
          name: 'tailwind-resources-component-buttons',
          component: () => import('@/views/tailwind/resources/components/buttons/Button.vue')
        },
        {
          path: '/tailwind/resources/component/badges',
          name: 'tailwind-resources-component-badges',
          component: () => import('@/views/tailwind/resources/components/badges/Badge.vue')
        },
        {
          path: '/tailwind/resources/component/cards',
          name: 'tailwind-resources-component-cards',
          component: () => import('@/views/tailwind/resources/components/cards/Card.vue')
        },
        {
          path: '/tailwind/resources/component/avatars',
          name: 'tailwind-resources-component-avatars',
          component: () => import('@/views/tailwind/resources/components/avatars/Avatar.vue')
        },
        {
          path: '/tailwind/resources/component/paginations',
          name: 'tailwind-resources-component-paginations',
          component: () => import('@/views/tailwind/resources/components/paginations/Pagination.vue')
        },
        {
          path: '/tailwind/resources/component/breadcrumbs',
          name: 'tailwind-resources-component-breadcrumbs',
          component: () => import('@/views/tailwind/resources/components/breadcrumbs/Breadcrumb.vue')
        },
        //Routes Block
        {
          path: '/tailwind/resources/block/blog1',
          name: 'tailwind-resources-block-blog1',
          component: () => import('@/views/tailwind/resources/blocks/blog/Blog1.vue')
        },
      ]
    },


   
  ]
})

export default router
