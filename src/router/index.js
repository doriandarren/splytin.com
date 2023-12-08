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
        // Routes Block
        // Blog
        {
          path: '/tailwind/resources/block/blog1',
          name: 'tailwind-resources-block-blog1',
          component: () => import('@/views/tailwind/resources/blocks/blog/Blog1.vue')
        },
        {
          path: '/tailwind/resources/block/blog2',
          name: 'tailwind-resources-block-blog2',
          component: () => import('@/views/tailwind/resources/blocks/blog/Blog2.vue')
        },
        {
          path: '/tailwind/resources/block/blog3',
          name: 'tailwind-resources-block-blog3',
          component: () => import('@/views/tailwind/resources/blocks/blog/Blog3.vue')
        },
        {
          path: '/tailwind/resources/block/blog4',
          name: 'tailwind-resources-block-blog4',
          component: () => import('@/views/tailwind/resources/blocks/blog/Blog4.vue')
        },
        {
          path: '/tailwind/resources/block/blog5',
          name: 'tailwind-resources-block-blog5',
          component: () => import('@/views/tailwind/resources/blocks/blog/Blog5.vue')
        },

        // Contact
        {
          path: '/tailwind/resources/block/contact1',
          name: 'tailwind-resources-block-contact1',
          component: () => import('@/views/tailwind/resources/blocks/contact/Contact1.vue')
        },
        {
          path: '/tailwind/resources/block/contact2',
          name: 'tailwind-resources-block-contact2',
          component: () => import('@/views/tailwind/resources/blocks/contact/Contact2.vue')
        },
        {
          path: '/tailwind/resources/block/contact3',
          name: 'tailwind-resources-block-contact3',
          component: () => import('@/views/tailwind/resources/blocks/contact/Contact3.vue')
        },

        // Content
        {
          path: '/tailwind/resources/block/content1',
          name: 'tailwind-resources-block-content1',
          component: () => import('@/views/tailwind/resources/blocks/content/Content1.vue')
        },
        {
          path: '/tailwind/resources/block/content2',
          name: 'tailwind-resources-block-content2',
          component: () => import('@/views/tailwind/resources/blocks/content/Content2.vue')
        },
        {
          path: '/tailwind/resources/block/content3',
          name: 'tailwind-resources-block-content3',
          component: () => import('@/views/tailwind/resources/blocks/content/Content3.vue')
        },
        {
          path: '/tailwind/resources/block/content4',
          name: 'tailwind-resources-block-content4',
          component: () => import('@/views/tailwind/resources/blocks/content/Content4.vue')
        },
        {
          path: '/tailwind/resources/block/content5',
          name: 'tailwind-resources-block-content5',
          component: () => import('@/views/tailwind/resources/blocks/content/Content5.vue')
        },
        {
          path: '/tailwind/resources/block/content6',
          name: 'tailwind-resources-block-content6',
          component: () => import('@/views/tailwind/resources/blocks/content/Content6.vue')
        },
        {
          path: '/tailwind/resources/block/content7',
          name: 'tailwind-resources-block-content7',
          component: () => import('@/views/tailwind/resources/blocks/content/Content7.vue')
        },
        {
          path: '/tailwind/resources/block/content8',
          name: 'tailwind-resources-block-content8',
          component: () => import('@/views/tailwind/resources/blocks/content/Content8.vue')
        },


        // CTA
        {
          path: '/tailwind/resources/block/cta1',
          name: 'tailwind-resources-block-cta1',
          component: () => import('@/views/tailwind/resources/blocks/cta/Cta1.vue')
        },
        {
          path: '/tailwind/resources/block/cta2',
          name: 'tailwind-resources-block-cta2',
          component: () => import('@/views/tailwind/resources/blocks/cta/Cta2.vue')
        },
        {
          path: '/tailwind/resources/block/cta3',
          name: 'tailwind-resources-block-cta3',
          component: () => import('@/views/tailwind/resources/blocks/cta/Cta3.vue')
        },


        // Ecommerce
        {
          path: '/tailwind/resources/block/ecommerce1',
          name: 'tailwind-resources-block-ecommerce1',
          component: () => import('@/views/tailwind/resources/blocks/ecommerce/Ecommerce1.vue')
        },
        {
          path: '/tailwind/resources/block/ecommerce2',
          name: 'tailwind-resources-block-ecommerce2',
          component: () => import('@/views/tailwind/resources/blocks/ecommerce/Ecommerce2.vue')
        },
        {
          path: '/tailwind/resources/block/ecommerce3',
          name: 'tailwind-resources-block-ecommerce3',
          component: () => import('@/views/tailwind/resources/blocks/ecommerce/Ecommerce3.vue')
        },


        // Feature
        {
          path: '/tailwind/resources/block/feature1',
          name: 'tailwind-resources-block-feature1',
          component: () => import('@/views/tailwind/resources/blocks/feature/Feature1.vue')
        },
        {
          path: '/tailwind/resources/block/feature2',
          name: 'tailwind-resources-block-feature2',
          component: () => import('@/views/tailwind/resources/blocks/feature/Feature2.vue')
        },
        {
          path: '/tailwind/resources/block/feature3',
          name: 'tailwind-resources-block-feature3',
          component: () => import('@/views/tailwind/resources/blocks/feature/Feature3.vue')
        },
        {
          path: '/tailwind/resources/block/feature4',
          name: 'tailwind-resources-block-feature4',
          component: () => import('@/views/tailwind/resources/blocks/feature/Feature4.vue')
        },
        {
          path: '/tailwind/resources/block/feature5',
          name: 'tailwind-resources-block-feature5',
          component: () => import('@/views/tailwind/resources/blocks/feature/Feature5.vue')
        },
        {
          path: '/tailwind/resources/block/feature6',
          name: 'tailwind-resources-block-feature6',
          component: () => import('@/views/tailwind/resources/blocks/feature/Feature6.vue')
        },
        {
          path: '/tailwind/resources/block/feature7',
          name: 'tailwind-resources-block-feature7',
          component: () => import('@/views/tailwind/resources/blocks/feature/Feature7.vue')
        },
        {
          path: '/tailwind/resources/block/feature8',
          name: 'tailwind-resources-block-feature8',
          component: () => import('@/views/tailwind/resources/blocks/feature/Feature8.vue')
        },


        // Footer
        {
          path: '/tailwind/resources/block/footer1',
          name: 'tailwind-resources-block-footer1',
          component: () => import('@/views/tailwind/resources/blocks/footer/Footer1.vue')
        },
        {
          path: '/tailwind/resources/block/footer2',
          name: 'tailwind-resources-block-footer2',
          component: () => import('@/views/tailwind/resources/blocks/footer/Footer2.vue')
        },
        {
          path: '/tailwind/resources/block/footer3',
          name: 'tailwind-resources-block-footer3',
          component: () => import('@/views/tailwind/resources/blocks/footer/Footer3.vue')
        },
        {
          path: '/tailwind/resources/block/footer4',
          name: 'tailwind-resources-block-footer4',
          component: () => import('@/views/tailwind/resources/blocks/footer/Footer4.vue')
        },
        {
          path: '/tailwind/resources/block/footer5',
          name: 'tailwind-resources-block-footer5',
          component: () => import('@/views/tailwind/resources/blocks/footer/Footer5.vue')
        },
        


      ]
    },


   
  ]
})

export default router
