import Vue from 'vue';
import Vuex from 'vuex';
import menus from './menu';

Vue.use(Vuex);

const state = {
    layout: {
        showSidebar: false,
        footerbar: true
    },
    title: '瑞金苏区干部学院|瑞金市政府批准成立',
    path: '/'
};

const mutations = {
    /**
     * 切换siderbar状态
     * @param state
     */
    toggleSiderbar(state) {
        state.layout.showSidebar = !state.layout.showSidebar;
    },
    /**
     * 设置页面标题
     * @param state
     * @param title
     */
    setTitle(state, title) {
        state.title = title;
    },
    /**
     * 设置path
     * @param state
     * @param path
     */
    setPath(state, path) {
        state.path = path;
    },
    /**
     * 设置底bar
     * @param state
     * @param isShow
     */
    setFooterbar(state, isShow) {
        console.log('setFooterbar:', isShow)
        state.layout.footerbar = isShow;
        console.log('setFooterbar2:', state.layout.footerbar)
    }
};

const actions = {
    /**
     * 切换siderbar状态
     * @param context
     */
    toggleSiderbar({ commit }) {
        commit('toggleSiderbar');
    },
    /**
     * 设置页面标题
     * @param commit
     */
    setTitle({ commit }, title) {
        commit('setTitle', title);
    },
    /**
     * 设置底bar
     * @param commit
     * @param isShow
     */
    setFooterbar({commit}, isShow) {
        commit('setFooterbar', isShow);
    }
};

const getters = {
    layout: state => state.layout,
    menuItems: state => state.menus.items,
    title: state => state.title,
    path: state => state.path
};

const modules = {
    menus
};

export default new Vuex.Store({
    strict: true,
    actions,
    getters,
    modules,
    state,
    mutations
});
