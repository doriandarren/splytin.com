export default [
    {
        path: '/generators/form',
        name: 'generator-form',
        component: () => import('@/modules/generators/views/form/GeneratorFormList.vue')
    },
    {
        path: '/generators/xml',
        name: 'generator-xml',
        component: () => import('@/modules/generators/views/form/GeneratorXmlList.vue')
    },
];