import { createRouter, createWebHistory } from 'vue-router';
import { useAuthenticationStore } from '@/stores/auth/authentication.js';


const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeView.vue')
    },

    /** Resouces */
    {
      path: '/resources',
      name: 'resources',
      component: () => import('@/components/template/public/Layout.vue'),
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


        // Gallery
        {
          path: '/tailwind/resources/block/gallery1',
          name: 'tailwind-resources-block-gallery1',
          component: () => import('@/views/tailwind/resources/blocks/gallery/Gallery1.vue')
        },
        {
          path: '/tailwind/resources/block/gallery2',
          name: 'tailwind-resources-block-gallery2',
          component: () => import('@/views/tailwind/resources/blocks/gallery/Gallery2.vue')
        },
        {
          path: '/tailwind/resources/block/gallery3',
          name: 'tailwind-resources-block-gallery3',
          component: () => import('@/views/tailwind/resources/blocks/gallery/Gallery3.vue')
        },



        // Header
        {
          path: '/tailwind/resources/block/header1',
          name: 'tailwind-resources-block-header1',
          component: () => import('@/views/tailwind/resources/blocks/header/Header1.vue')
        },
        {
          path: '/tailwind/resources/block/header2',
          name: 'tailwind-resources-block-header2',
          component: () => import('@/views/tailwind/resources/blocks/header/Header2.vue')
        },
        {
          path: '/tailwind/resources/block/header3',
          name: 'tailwind-resources-block-header3',
          component: () => import('@/views/tailwind/resources/blocks/header/Header3.vue')
        },
        {
          path: '/tailwind/resources/block/header4',
          name: 'tailwind-resources-block-header4',
          component: () => import('@/views/tailwind/resources/blocks/header/Header4.vue')
        },



        // Hero
        {
          path: '/tailwind/resources/block/hero1',
          name: 'tailwind-resources-block-hero1',
          component: () => import('@/views/tailwind/resources/blocks/hero/Hero1.vue')
        },
        {
          path: '/tailwind/resources/block/hero2',
          name: 'tailwind-resources-block-hero2',
          component: () => import('@/views/tailwind/resources/blocks/hero/Hero2.vue')
        },
        {
          path: '/tailwind/resources/block/hero3',
          name: 'tailwind-resources-block-hero3',
          component: () => import('@/views/tailwind/resources/blocks/hero/Hero3.vue')
        },
        {
          path: '/tailwind/resources/block/hero4',
          name: 'tailwind-resources-block-hero4',
          component: () => import('@/views/tailwind/resources/blocks/hero/Hero4.vue')
        },
        {
          path: '/tailwind/resources/block/hero5',
          name: 'tailwind-resources-block-hero5',
          component: () => import('@/views/tailwind/resources/blocks/hero/Hero5.vue')
        },
        {
          path: '/tailwind/resources/block/hero6',
          name: 'tailwind-resources-block-hero6',
          component: () => import('@/views/tailwind/resources/blocks/hero/Hero6.vue')
        },



        // Pricing
        {
          path: '/tailwind/resources/block/pricing1',
          name: 'tailwind-resources-block-pricing1',
          component: () => import('@/views/tailwind/resources/blocks/pricing/Pricing1.vue')
        },
        {
          path: '/tailwind/resources/block/pricing2',
          name: 'tailwind-resources-block-pricing2',
          component: () => import('@/views/tailwind/resources/blocks/pricing/Pricing2.vue')
        },


        // Statistic
        {
          path: '/tailwind/resources/block/statistic1',
          name: 'tailwind-resources-block-statistic1',
          component: () => import('@/views/tailwind/resources/blocks/statistic/Statistic1.vue')
        },
        {
          path: '/tailwind/resources/block/statistic2',
          name: 'tailwind-resources-block-statistic2',
          component: () => import('@/views/tailwind/resources/blocks/statistic/Statistic2.vue')
        },
        {
          path: '/tailwind/resources/block/statistic3',
          name: 'tailwind-resources-block-statistic3',
          component: () => import('@/views/tailwind/resources/blocks/statistic/Statistic3.vue')
        },



        // Step
        {
          path: '/tailwind/resources/block/step1',
          name: 'tailwind-resources-block-step1',
          component: () => import('@/views/tailwind/resources/blocks/step/Step1.vue')
        },
        {
          path: '/tailwind/resources/block/step2',
          name: 'tailwind-resources-block-step2',
          component: () => import('@/views/tailwind/resources/blocks/step/Step2.vue')
        },



        // Team
        {
          path: '/tailwind/resources/block/team1',
          name: 'tailwind-resources-block-team1',
          component: () => import('@/views/tailwind/resources/blocks/team/Team1.vue')
        },
        {
          path: '/tailwind/resources/block/team2',
          name: 'tailwind-resources-block-team2',
          component: () => import('@/views/tailwind/resources/blocks/team/Team2.vue')
        },
        {
          path: '/tailwind/resources/block/team3',
          name: 'tailwind-resources-block-team3',
          component: () => import('@/views/tailwind/resources/blocks/team/Team3.vue')
        },


        // Testimonial
        {
          path: '/tailwind/resources/block/testimonial1',
          name: 'tailwind-resources-block-testimonial1',
          component: () => import('@/views/tailwind/resources/blocks/testimonial/Testimonial1.vue')
        },
        {
          path: '/tailwind/resources/block/testimonial2',
          name: 'tailwind-resources-block-testimonial2',
          component: () => import('@/views/tailwind/resources/blocks/testimonial/Testimonial2.vue')
        },
        {
          path: '/tailwind/resources/block/testimonial3',
          name: 'tailwind-resources-block-testimonial3',
          component: () => import('@/views/tailwind/resources/blocks/testimonial/Testimonial3.vue')
        },

      ]
    },


    /** Login */
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/LoginView.vue')
    },

    /** test */
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/dev/TestView.vue')
    },




    /** Rutas protegidas */
    {
      path: '/',
      name: 'main',
      component: () => import('@/components/template/private/Main.vue'),
      redirect: '/dashboard',
      meta: { requiresAuth: true },
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/dashboard/DashboardList.vue')
        },
        {
          path: '/categories',
          name: 'categories',
          component: () => import('@/views/categories/CategoryList.vue')
        },
        {
          path: '/msft-prices',
          name: 'msft-prices',
          component: () => import('@/views/msft_prices/MsftPricesList.vue')
        },
        {
          path: '/companies',
          name: 'companies',
          component: () => import('@/views/companies/CompanyList.vue')
        },
        {
          path: '/own_companies',
          name: 'own_companies',
          component: () => import('@/views/own_companies/OwnCompanyList.vue')
        },
        {
          path: '/projects',
          name: 'projects',
          component: () => import('@/views/projects/ProjectList.vue')
        },
        {
          path: '/project_hours',
          name: 'project_hours',
          component: () => import('@/views/project_hours/ProjectHourList.vue')
        },
        {
          path: '/invoice_headers',
          name: 'invoice_headers',
          component: () => import('@/views/invoice_headers/InvoiceHeaderList.vue')
        },
        {
          path: '/invoice_lines',
          name: 'invoice_lines',
          component: () => import('@/views/invoice_lines/InvoiceLineList.vue')
        },


      ]

    },

];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})




router.beforeEach(async(to, from, next) => {

  document.title = `${to.name} - ${import.meta.env.VITE_APP_TITLE}`;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    
    const useAuthentication = useAuthenticationStore();

    let response = await useAuthentication.currentUser();

    try {
      if(response){
        next();
      }else{
        next({name: "login" });
      }
    } catch (e) {
        console.log(e);
        next({name: "login" });
    }
  
  }else{
    next();
  }

});


export default router
