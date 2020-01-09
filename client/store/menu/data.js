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
        name: '学校介绍',
        show: true,
        meta: {
            title: '学校介绍'
        },
        subs: [
            {
                name: '学校介绍',
                path: '/school/intro',
                show: true,
                component() {
                    return import('@Views/scheme/scheme.vue');
                },
                meta: {
                    title: '学校介绍',
                    footerBar: false
                }
            }
        ]
    },
    {
        name: '基地',
        show: true,
        meta: {
            title: '基地'
        },
        subs: [
            {
                name: '瑞金',
                path: '/base/ruijin',
                show: true,
                component() {
                    return import('@Views/base/index.vue');
                },
                meta: {
                    title: '瑞金',
                    footerBar: true
                }
            },
            {
                name: '井冈山',
                path: '/base/jinggangshan',
                show: true,
                component() {
                    return import('@Views/base/index.vue');
                },
                meta: {
                    title: '井冈山',
                    footerBar: true
                }
            },
            {
                name: '韶山',
                path: '/base/shaoshan',
                show: true,
                component() {
                    return import('@Views/base/index.vue');
                },
                meta: {
                    title: '韶山',
                    footerBar: true
                }
            },
            {
                name: '上海',
                path: '/base/shanghai',
                show: true,
                component() {
                    return import('@Views/base/index.vue');
                },
                meta: {
                    title: '上海',
                    footerBar: true
                }
            },
            {
                name: '遵义',
                path: '/base/zunyi',
                show: true,
                component() {
                    return import('@Views/base/index.vue');
                },
                meta: {
                    title: '遵义',
                    footerBar: true
                }
            },
            {
                name: '延安',
                path: '/base/yanan',
                show: true,
                component() {
                    return import('@Views/base/index.vue');
                },
                meta: {
                    title: '延安',
                    footerBar: true
                }
            },
            {
                name: '红旗渠',
                path: '/base/hongqiqu',
                show: true,
                component() {
                    return import('@Views/base/index.vue');
                },
                meta: {
                    title: '红旗渠',
                    footerBar: true
                }
            }
        ]
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
        name: '培训方案详情',
        path: '/scheme/detail',
        show: true,
        component() {
            return import('@Views/scheme/traindetail.vue');
        },
        meta: {
            title: '培训方案详情',
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
        path: '/redculture',
        show: true,
        component() {
            return import('@Views/redculture/index.vue');
        },
        meta: {
            title: '红色文创',
            footerBar: false
        }
    },
    {
        name: '联系我们',
        path: '/concat',
        show: true,
        component() {
            return import('@Views/concat/index.vue');
        },
        meta: {
            title: '联系我们',
            footerBar: true
        }
    }
];
