import { createRouter, createWebHistory } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAuthenticationStore } from '@/stores/auth/authentication.js';

// Tailwind Resources
import TailwindResourceRoutes from '../modules/tailwind_resources/router/index.js';
// Auth
import LoginRoutes from '../modules/auth/router/index.js';

// MainScreen
import MainScreenRoutes from '../modules/main_screen/router/index.js';



const routes = [
  /** Template Public */
  {
    path: '/',
    name: 'master',
    component: () => import('@/components/template/public/Main.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/HomeView.vue'),
      },

      {
        path: '/privacy-policies',
        name: 'privacy-policies',
        component: () => import('@/views/privacy_policies/PrivacyPolicies.vue')
      },

      {
        path: '/websocket',
        name: 'websocket',
        component: () => import('@/modules/websocket/views/Websocket.vue')
      },

      {
        path: '/cookies',
        name: 'cookies',
        component: () => import('@/views/cookies/Cookies.vue')
      },
      

      //Resouces
      ...TailwindResourceRoutes,


      /** Login */
      ...LoginRoutes,      
      

    ]
  },



  /** Template Modules */
  {
    path: '/',
    name: 'module',
    component: () => import('@/components/template/private/MainScreen.vue'),
    redirect: '/main-screen',
    meta: { requiresAuth: true },
    children: [
      //MainScreen
      ...MainScreenRoutes,
    ]
  },







  /** Template Private */
  {
    path: '/',
    name: 'main',
    component: () => import('@/components/template/private/Invoices.vue'),
    redirect: '/dashboard',
    meta: { requiresAuth: true },
    children: [      
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/DashboardList.vue')
      },
      {
        path: '/msft-prices',
        name: 'msft-prices',
        component: () => import('@/views/msft_prices/MsftPricesList.vue')
      },
      {
        path: '/companies',
        name: 'companies',
        component: () => import('@/modules/invoices/views/companies/CompanyList.vue')
      },
      {
        path: '/own_companies',
        name: 'own_companies',
        component: () => import('@/modules/invoices/views/own_companies/OwnCompanyList.vue')
      },
      {
        path: '/projects',
        name: 'projects',
        component: () => import('@/modules/invoices/views/projects/ProjectList.vue')
      },
      {
        path: '/project_hours',
        name: 'project_hours',
        component: () => import('@/modules/invoices/views/project_hours/ProjectHourList.vue')
      },
      {
        path: '/invoice_headers',
        name: 'invoice_headers',
        component: () => import('@/modules/invoices/views/invoice_headers/InvoiceHeaderList.vue')
      },
      {
        path: '/invoice_lines',
        name: 'invoice_lines',
        component: () => import('@/modules/invoices/views/invoice_lines/InvoiceLineList.vue')
      },
      {
        path: '/customers',
        name: 'customers',
        component: () => import('@/modules/invoices/views/customers/CustomerList.vue')
      },
      {
        path: '/providers',
        name: 'providers',
        component: () => import('@/modules/invoices/views/providers/ProviderList.vue')
      },
      {
        path: '/services',
        name: 'services',
        component: () => import('@/modules/invoices/views/services/ServiceList.vue')
      },

    ]

  },



  /** test */
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/dev/TestView.vue')
  },

  /** Not found */
  { 
    path: '/:path(.*)', 
    name: "NotFound",
    component: () => import('@/views/sessions/404.vue'), 
  },

];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})



router.beforeEach(async (to, from, next) => {
  // Actualizar el título de la página
  document.title = `${to.name.charAt(0).toUpperCase() + to.name.slice(1)} - ${import.meta.env.VITE_APP_TITLE}`;

  if (to.matched.some(record => record.meta.requiresAuth)) {

    try {

      const authStore = useAuthenticationStore();
      const { currentUser } = authStore;
      const { user, authErrors } = storeToRefs(authStore);

      await currentUser();

      if (user.value) {
        next();
      } else {
        next({ name: "login" });
      }
    } catch (e) {
      console.log(e);
      next({ name: "login" });
    }

  } else {
    next();
  }
});

export default router
