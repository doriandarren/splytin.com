export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/modules/auth/views/login/LoginView.vue')
    },
]