<!--
@file: 主APP引入文件
-->
<template>
    <div id="app" class="h5admin">
        <!--侧边栏-->
        <Sidebar :show="layout.showSidebar"></Sidebar>
        <!--顶部导航-->
        <Navbar>
            <!--navbar 内容-->
            <flex-box class="hd" justify="space-between" v-if="path==='/'">
                <a class="logo" href="javascript:void(0)" @click="toggleSiderbar()"></a>
                <div class="title">{{title}}</div>
            </flex-box>
            <flex-box class="hd" justify="space-between" v-else>
                <a class="back" href="javascript:void(0)" @click="back()"></a>
                <div class="title">{{title}}</div>
                <a class="logo" href="javascript:void(0)" @click="toggleSiderbar()"></a>
            </flex-box>
            <!--navbar 内容结束-->
        </Navbar>
        <!--页面内容-->
        <div class="main-content">
            <AppMain></AppMain>
        </div>
        <Footerbar v-if="layout.footerbar"></Footerbar>
    </div>
</template>

<style lang="less">
    @import './assets/css/index';

    .h5admin {
        height: 100vh;

        .hd {
            height: 100%;
            padding: 0 15px;
            font-size: @body-font-size;

            .logo {
                background-image: url("./assets/images/menu.png");
                background-size: 30px;
                display: block;
                width: 30px;
                height: 30px;
            }

            .back {
                background-image: url("./assets/images/back.png");
                background-size: 30px;
                display: block;
                width: 30px;
                height: 30px;
            }

            .title {
                font-size: 18px;
                color: #fff;
                font-weight: bold;
                font-family: @body-family;
                text-align: center;
                flex: auto;
            }
        }

        .main-content {
            .flex(1);
            .flexbox();
        }
    }
</style>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import {
        Navbar,
        Sidebar,
        AppMain,
        Footerbar
    } from './components/layout/index';

    export default {
        components: {
            Navbar,
            Sidebar,
            AppMain,
            Footerbar
        },
        data() {
            return {
            };
        },
        computed: {
            ...mapGetters(['layout', 'title', 'path'])
        },
        methods: {
            ...mapActions(['toggleSiderbar']),
            back() {
                this.$router.go(-1)
            }
        }
    };
</script>
