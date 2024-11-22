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
];