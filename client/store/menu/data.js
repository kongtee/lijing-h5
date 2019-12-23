export default [
    {
        name: '首页',
        path: '/',
        component() {
            return import('@Views/home/index.vue');
        },
    },
    {
        name: '新闻咨询',
        path: '/news',
        component() {
            return import('@Views/news/news.vue');
        },
    }
];
