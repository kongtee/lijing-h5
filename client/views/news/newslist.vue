<template>
    <div class="news-list-container">
        <ul class="news-list">
            <li class="news-item">
                <a class="news-item-wrap" href="#/news/detail">
                    <div class="news-item-image">
                        <img src="@Assets/images/index01.jpg">
                    </div>
                    <div class="news-item-content">
                        <header class="news-title">习近平在中央党校（国家行政学院）</header>
                        <section class="news-content">今天上午，有圣诞节了可使肌肤看来睡觉靠的就是雷锋精神</section>
                        <div class="news-time">发布时间：2019-12-12</div>
                    </div>
                </a>
            </li>
            <li class="news-item">
                <a class="news-item-wrap" href="#/news/detail">
                    <div class="news-item-image">
                        <img src="@Assets/images/index01.jpg">
                    </div>
                    <div class="news-item-content">
                        <header class="news-title">习近平在中央党校（国家行政学院）</header>
                        <section class="news-content">今天上午，有圣诞节了可使肌肤看来睡觉靠的就是雷锋精神</section>
                        <div class="news-time">发布时间：2019-12-12</div>
                    </div>
                </a>
            </li>
            <li class="news-item">
                <a class="news-item-wrap" href="#/news/detail">
                    <div class="news-item-image">
                        <img src="@Assets/images/index01.jpg">
                    </div>
                    <div class="news-item-content">
                        <header class="news-title">习近平在中央党校（国家行政学院）</header>
                        <section class="news-content">今天上午，有圣诞节了可使肌肤看来睡觉靠的就是雷锋精神</section>
                        <div class="news-time">发布时间：2019-12-12</div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "newslist"
    }
</script>

<style lang='less'>
    .news-list-container {
        .news-list {
            padding-top: 5px;

            .news-item {
                padding: 15px 0;
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
                }
            }

            .news-item:first-child {
                border: none;
            }
        }
    }
</style>
