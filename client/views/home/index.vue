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
        <!-- 新闻动态 -->
        <div class="section-container">
            <div class="news-header">
                <header>新闻动态</header>
                <div class="more"><a href="#/news">更多>></a></div>
            </div>
            <NewsList></NewsList>
        </div>
        <!-- 新闻动态 -->
        <!-- 走进瑞金 -->
        <div class="section-container">
            <Ruijin></Ruijin>
        </div>
        <!-- 走进瑞金 -->
        <!-- 红色记忆 -->
        <div class="section-container">
            <div class="news-header">
                <header>红色记议</header>
            </div>
            <ul class="mem-list">
                <li class="mem-item">
                    <a class="mem-item-wrap" href="#/news/detail">习近平在中央党校（国家行政学院）中青年干部</a>
                </li>
                <li class="mem-item">
                    <a class="mem-item-wrap" href="#/news/detail">红色旧址为青少年成长烙上"税收"印记</a>
                </li>
                <li class="mem-item">
                    <a class="mem-item-wrap" href="#/news/detail">从井冈山到延安--毛泽东里奋斗史中的红色血脉</a>
                </li>
                <li class="mem-item">
                    <a class="mem-item-wrap" href="#/news/detail">红色旧址为青少年成长烙上"税收"印记商店还斐林试剂历史记录会计师来得及克里斯杰弗里斯</a>
                </li>
                <li class="mem-item">
                    <a class="mem-item-wrap" href="#/news/detail">从井冈山到延安--毛泽东里奋斗史中的红色血脉</a>
                </li>
            </ul>
        </div>
        <!-- 红色记忆 -->
        <!-- 培训方案 -->
        <div class="section-container">
            <div class="news-header">
                <header>培训方案</header>
            </div>
            <TrainList></TrainList>
        </div>
        <!-- 培训方案 -->
        <!-- 其他基地 -->
        <div class="other-container">
            <div class="news-header">
                <header>其他基地</header>
            </div>
            <ul class="other-list">
                <li class="other-item">
                    <a class="other-item-wrap" href="#">
                        <img src="@Assets/images/img01.jpg">
                    </a>
                </li>
                <li class="other-item other-item-small">
                    <a class="other-item-wrap" href="#">
                        <img src="@Assets/images/img02.jpg">
                    </a>
                </li>
                <li class="other-item other-item-small">
                    <a class="other-item-wrap" href="#">
                        <img src="@Assets/images/img03.jpg">
                    </a>
                </li>
                <li class="other-item">
                    <a class="other-item-wrap" href="#">
                        <img src="@Assets/images/img04.jpg">
                    </a>
                </li>
                <li class="other-item other-item-small">
                    <a class="other-item-wrap" href="#">
                        <img src="@Assets/images/img05.jpg">
                    </a>
                </li>
                <li class="other-item other-item-small">
                    <a class="other-item-wrap" href="#">
                        <img src="@Assets/images/img06.jpg">
                    </a>
                </li>
            </ul>
        </div>
        <!-- 其他基地 -->
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

        .section-container {
            margin: 20px;
            overflow: hidden;

            .mem-list {
                padding: 15px 0;

                .mem-item {
                    line-height: 29px;
                    font-size: 13px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
            }
        }

        .other-container {
            padding-top: 20px;
            overflow: hidden;

            .news-header {
                margin: 0 20px;
            }

            .other-list {
                display: flex;
                flex-wrap: wrap;
                padding-top: 15px;

                .other-item img {
                    display: block;
                    width: 38vw;
                }

                .other-item-small img {
                    width: 31vw;
                }
            }
        }
    }
</style>

<script>
    import NewsList from '../news/newslist';
    import TrainList from '../scheme/trainlist';
    import Ruijin from '../ruijin/ruijin';

    export default {
        components: {
            NewsList,
            TrainList,
            Ruijin
        }
    }
</script>

