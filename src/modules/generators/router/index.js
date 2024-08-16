export default [
    {
        path: '/generators/form',
        name: 'generator-form',
        component: () => import('@/modules/generators/views/form/GeneratorFormList.vue')
    },
    {
        path: '/generators/xml',
        name: 'generator-xml',
        component: () => import('@/modules/generators/views/xml/GeneratorXmlList.vue')
    },
    {
        path: '/generators/videos',
        name: 'generator-videos',
        component: () => import('@/modules/generators/views/videos/GeneratorVideoList.vue')
    },
];