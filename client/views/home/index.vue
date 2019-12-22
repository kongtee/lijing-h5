<template>
    <div class='home-page'>
        <div class="image-wrap">
            <img class="image" src="@Assets/images/ad.jpg">
        </div>
        <div class="image-wrap">
            <img class="image" src="@Assets/images/index01.jpg">
        </div>
        <div class="image-wrap">
            <img class="image" src="@Assets/images/index02.jpg">
        </div>
        <div class="news-container">
            <div class="news-header">
                <header>新闻动态</header>
                <div class="more"><a href="#">更多>></a></div>
            </div>
            <ul class="news-list">
                <li class="news-item">
                    <a class="news-item-wrap" href="#">
                        <div class="news-item-image">
                            <img src="@Assets/images/index01.jpg">
                        </div>
                        <div class="news-item-content">
                            <header>习近平在中央党校（国家行政学院）</header>
                            <section>今天上午，有圣诞节了可使肌肤看来睡觉靠的就是雷锋精神</section>
                            <div class="news-item-time">发布时间：2019-12-12</div>
                        </div>
                    </a>
                </li>
                <li class="news-item">
                    <a class="news-item-wrap" href="#">
                        <div class="news-item-image">
                            <img src="@Assets/images/index01.jpg">
                        </div>
                        <div class="news-item-content">
                            <header>习近平在中央党校（国家行政学院）</header>
                            <section>今天上午，有圣诞节了可使肌肤看来睡觉靠的就是雷锋精神</section>
                            <div class="news-item-time">发布时间：2019-12-12</div>
                        </div>
                    </a>
                </li>
                <li class="news-item">
                    <a class="news-item-wrap" href="#">
                        <div class="news-item-image">
                            <img src="@Assets/images/index01.jpg">
                        </div>
                        <div class="news-item-content">
                            <header>习近平在中央党校（国家行政学院）</header>
                            <section>今天上午，有圣诞节了可使肌肤看来睡觉靠的就是雷锋精神</section>
                            <div class="news-item-time">发布时间：2019-12-12</div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang='less'>
    .home-page {
        .image-wrap {
            width: 100%;

            .image {
                width: 100%;
                display: block;
            }
        }

        .news-container {
            margin: 20px;
            overflow: hidden;

            .news-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;

                header {
                    font-size: 18px;
                    font-weight: bold;
                    color: #913823;
                }
            }

            .news-list {
                padding-top: 5px;

                .news-item {
                    padding: 30px 0;
                    border-top: 1px solid #eee;

                    .news-item-wrap {
                        display: flex;
                    }

                    .news-item-image {
                        width: 80px;
                        height: 80px;
                        overflow: hidden;
                        flex-shrink: 0;

                        img {
                            width: 100%;
                        }
                    }

                    .news-item-content {
                        margin-left: 13px;

                        header {
                            font-size: 14px;
                        }

                        section {
                            font-size: 12px;
                            margin: 4px 0 8px;
                            height: 34px;
                            overflow: hidden;
                        }

                        .news-item-time {
                            font-size: 10px;
                            color: #999;
                        }
                    }
                }

                .news-item:first-child {
                    border: none;
                }
            }
        }
    }
</style>

<script>
    export default {
        data() {
            return {};
        },
        computed: {},
        mounted() {
        },
        methods: {}
    }
</script>

