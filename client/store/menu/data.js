export default [
    {
        name: '首页',
        path: '/',
        show: true,
        meta: {
            title: '瑞金苏区干部学院|瑞金市政府批准成立'
        },
        component() {
            return import('@Views/home/index.vue');
        },
    },
    {
        name: '培训方案',
        path: '/scheme',
        show: true,
        component() {
            return import('@Views/scheme/scheme.vue');
        },
        meta: {
            title: '培训方案'
        },
    },
    {
        name: '新闻资讯',
        path: '/news',
        show: true,
        component() {
            return import('@Views/news/news.vue');
        },
    },
    {
        name: '新闻资讯-详情页',
        path: '/news/detail',
        show: false,
        component() {
            return import('@Views/news/newsdetail.vue');
        },
    }
];
