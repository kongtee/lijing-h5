<template>
    <div class="news-detail">
        <div class="news-detail-img"><img src="@Assets/images/img07.jpg"></div>
        <div class="news-time">发布时间：2019-04-19</div>
        <header class="news-title">收到货时肯定会</header>
        <section class="news-content">商店还时间到了时间到了设计的考虑就是来得及</section>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "newsdetail",
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

<style lang='less'>
    .news-detail {
        margin: 10px 15px;
        .news-detail-img {
            img {
                display: block;
                width: 100%;
            }
        }

        .news-time {
            text-align: center;
            margin: 10px 0;
        }

        .news-title {
            text-align: center;
            margin: 5px 0 25px;
        }
    }
</style>