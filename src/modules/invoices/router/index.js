export default [
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
];