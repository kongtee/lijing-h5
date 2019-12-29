<template>
    <div class="news-list-wrap">
        <ul class="news-list-cate">
            <li><a class="cate-btn active" href="javascript:void(0)">全部</a></li>
            <li><a class="cate-btn" href="javascript:void(0)">瑞金</a></li>
            <li><a class="cate-btn" href="javascript:void(0)">瑞金</a></li>
            <li><a class="cate-btn" href="javascript:void(0)">瑞金</a></li>
        </ul>
        <NewsList></NewsList>
    </div>
</template>

<style lang='less'>
    .news-list-wrap {
        margin: 15px;

        .news-list-cate {
            display: flex;

            .cate-btn {
                margin-right: 5px;
                color: #fff;
                background-color: #a0a0a0;
                font-size: 12px;
                display: block;
                width: 45px;
                height: 22px;
                line-height: 22px;
                text-align: center;
                border-radius: 10px;
            }

            .cate-btn.active {
                background-color: #e70012;
            }
        }
    }
</style>

<script>
    import { mapActions } from 'vuex';
    import NewsList from '../news/newslist';

    export default {
        name: "news",
        components: {
            NewsList
        },
        mounted() {
            this.init();
        },
        methods: {
            ...mapActions(['setFooterbar']),
            init() {
                this.setFooterbar(false);
            }
        }
    }
</script>