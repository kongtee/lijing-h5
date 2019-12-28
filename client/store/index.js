import Vue from 'vue';
import Vuex from 'vuex';
import menus from './menu';

Vue.use(Vuex);

const state = {
    layout: {
        showSidebar: false
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
