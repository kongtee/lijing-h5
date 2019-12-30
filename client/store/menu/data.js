export default [
    {
        name: '首页',
        path: '/',
        show: true,
        meta: {
            title: '瑞金苏区干部学院|瑞金市政府批准成立',
            footerBar: true
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
            title: '培训方案',
            footerBar: false
        }
    },
    {
        name: '媒体介绍',
        path: '/media',
        show: true,
        component() {
            return import('@Views/media/intro.vue');
        },
        meta: {
            title: '媒体介绍',
            footerBar: true
        }
    },
    {
        name: '新闻资讯',
        path: '/news',
        show: true,
        component() {
            return import('@Views/news/news.vue');
        },
        meta: {
            title: '新闻资讯',
            footerBar: false
        }
    },
    {
        name: '新闻资讯-详情页',
        path: '/news/detail',
        show: false,
        component() {
            return import('@Views/news/newsdetail.vue');
        },
        meta: {
            title: '新闻资讯-详情页',
            footerBar: false
        }
    },
    {
        name: '红色文创',
        path: '/news',
        show: true,
        component() {
            return import('@Views/redculture/index.vue');
        },
        meta: {
            title: '红色文创',
            footerBar: false
        }
    }
];
