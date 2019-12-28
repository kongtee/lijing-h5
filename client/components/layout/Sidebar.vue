<template>
    <aside class="app-sidebar" @click="toggleSiderbar()" v-if="layout.showSidebar">
        <div class="sidebar-menu">
            <header class="sidebar-title">瑞金</header>
            <ul>
                <template v-for="(item, index) in menuItems">
                    <li v-if="item.show" class="siderbar-item">
                        <a class="siderbar-item-link" v-if="!item.subs" href="javascript:void(0)" @click="jump(item.path)">{{ item.name }}</a>

<!--                        <el-submenu v-else :index="'#subm' + index">-->
<!--                            <template slot="title">-->
<!--                                <i :class="['icon iconfont', item.meta.icon]"></i>-->
<!--                                <span>{{ item.name }}</span>-->
<!--                            </template>-->

<!--                            <el-menu-item v-for="sub in item.subs" :index="'#' + sub.path" v-if="item.show"-->
<!--                                          @click="jump(sub.path)">-->
<!--                                {{ sub.name }}-->
<!--                            </el-menu-item>-->
<!--                        </el-submenu>-->
                    </li>
                </template>
            </ul>
        </div>
    </aside>
</template>

<style lang="less">
    @import "../../assets/common/var";

    .app-sidebar {
        /*box-shadow: 2px 2px 6px rgba(0, 0, 0, .3);*/
        overflow-y: auto;
        overflow-x: hidden;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 9999;

        .sidebar-menu {
            height: 100%;
            background-color: #212121;
            width: 200px;

            .sidebar-title {
                background-color: #c40001;
                color: #fafafa;
                height: 70px;
                line-height: 70px;
                font-size: 24px;
                padding: 0 24px;
                font-weight: bold;
            }

            .siderbar-item {
                .siderbar-item-link {
                    color: #bdbdbd;
                    height: 56px;
                    line-height: 56px;
                    padding: 0 32px;
                    display: block;

                }
            }
        }
    }
</style>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        components: {},
        props: {
            show: Boolean
        },
        data() {
            return {
                isReady: false
            };
        },
        computed: {
            ...mapGetters([
                'layout',
                'menuItems'
            ])
        },
        methods: {
            ...mapActions(['toggleSiderbar']),
            jump(path) {
                this.$router.push({
                    path: path
                });
            }
        }
    };
</script>
