export default [
    {
        name: '首页',
        meta: {
            icon: 'icon-home',
            expanded: false
        },
        show: false,
        path: '/',
        component() {
            return import('@Views/home/index.vue');
        },
    },
    {
        name: '音频工具',
        meta: {
            icon: 'icon-home',
            expanded: false
        },
        show: false,
        path: '/',
        component() {
            return import('@Views/home/index.vue');
        },
    }
];
