import Vue from 'vue';
import Router from 'vue-router';
import menus from '../store/menu';
import store from '../store';

Vue.use(Router);

// 2 levels.
function generateRoutesFromMenu(menu = [], routes = []) {
    for (let i = 0, l = menu.length; i < l; i++) {
        let item = menu[ i ];
        if (item.path) {
            routes.push(item);
        }
        if (item.subs) {
            generateRoutesFromMenu(item.subs, routes);
        }
    }
    return routes;
}

const router = new Router({
    mode: 'hash',
    linkActiveClass: 'is-active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        ...generateRoutesFromMenu(menus.state.items)
    ]
});

router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.meta.title) {
        store.commit('setTitle', to.meta.title);
        store.commit('setPath', to.path);
    }
    store.commit('setFooterbar', to.meta.footerBar);
    next();
});

export default router;
