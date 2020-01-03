<template>
    <div class="jidi">
        <div>
            <img src="@Assets/images/jidi_yananimg.jpg">
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
        <!-- 延安基地介绍 -->
        <div class="section-container">
            <div class="news-header">
                <header>延安基地介绍</header>
            </div>
            <section>啥地方隆盛科技反馈了数据发看来睡觉放辣椒历史记录开始就了看见爱上龙卷风垃圾分类快结束了开房记录开始就弗兰克斯健身房拉上啥都好说了解双方见识到了开发技术的方式</section>
            <div class="jidi-intro-concat">
                <div class="jidi-intro-title">资讯热线：</div>
                <div class="jidi-intro-content">
                    <div>范老师</div>
                    <div class="jidi-intro-tel">400-155-1911</div>
                </div>
            </div>
        </div>
        <!-- 延安基地介绍 -->
        <!-- 培训方案 -->
        <div class="section-container">
            <div class="news-header">
                <header>培训方案</header>
            </div>
            <TrainList></TrainList>
        </div>
        <!-- 培训方案 -->
        <!-- 创新教学 -->
        <div class="section-container">
            <div class="news-header">
                <header>创新教学</header>
            </div>
            <ul class="new-tech-list">
                <li class="new-tech-item">
                    <img src="@Assets/images/jidi_img01.jpg">
                    <div class="new-tech-content">
                        <header>专题教学</header>
                        <div>我们采用模块+专题的形式，选择一些典型的历史事件，历史人物等，进行更加深入的阐述革命精神</div>
                    </div>
                </li>
                <li class="new-tech-item">
                    <img src="@Assets/images/jidi_img02.jpg">
                    <div class="new-tech-content">
                        <header>现场教学</header>
                        <section>在革命圣地实地感受中国革命斗争的艰辛，先烈的英雄事迹以及延安的精神崇高等历史财富</section>
                    </div>
                </li>
                <li class="new-tech-item">
                    <img src="@Assets/images/jidi_img03.jpg">
                    <div class="new-tech-content">
                        <header>激情教学</header>
                        <section>在轻松愉快的氛围中，唱响影响了几代人的红歌，在歌声中感受延安人民的热情和那个特殊的年代</section>
                    </div>
                </li>
                <li class="new-tech-item">
                    <img src="@Assets/images/jidi_img04.jpg">
                    <div class="new-tech-content">
                        <header>体验教学</header>
                        <section>演绎红军时期的生活，学习老一辈无产阶级革命家身先士卒的高风亮节，对新时期领导干部有很好的教育意义</section>
                    </div>
                </li>
                <li class="new-tech-item">
                    <img src="@Assets/images/jidi_img05.jpg">
                    <div class="new-tech-content">
                        <header>访谈教学</header>
                        <section>深度剖析老一辈共产党人的高尚情怀，加强党性修养。让学员在心灵上受到洗礼，在精神上受到震撼</section>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 创新教学 -->
        <!-- 资源教学 -->
        <div class="section-container">
            <div class="news-header">
                <header>资源教学</header>
            </div>
            <ul class="tech-res-list">
                <li class="tech-res-item">
                    <a href="javascript:void(0)">
                        <img src="@Assets/images/img01.jpg">
                    </a>
                    <div class="tech-res-name">毛泽东旧居</div>
                </li>
                <li class="tech-res-item">
                    <a href="javascript:void(0)">
                        <img src="@Assets/images/img01.jpg">
                    </a>
                    <div class="tech-res-name">毛泽东旧居</div>
                </li>
                <li class="tech-res-item">
                    <a href="javascript:void(0)">
                        <img src="@Assets/images/img01.jpg">
                    </a>
                    <div class="tech-res-name">毛泽东旧居</div>
                </li>
                <li class="tech-res-item">
                    <a href="javascript:void(0)">
                        <img src="@Assets/images/img01.jpg">
                    </a>
                    <div class="tech-res-name">毛泽东旧居</div>
                </li>
                <li class="tech-res-item">
                    <a href="javascript:void(0)">
                        <img src="@Assets/images/img01.jpg">
                    </a>
                    <div class="tech-res-name">毛泽东旧居</div>
                </li>
                <li class="tech-res-item">
                    <a href="javascript:void(0)">
                        <img src="@Assets/images/img01.jpg">
                    </a>
                    <div class="tech-res-name">毛泽东旧居</div>
                </li>
            </ul>
        </div>
        <!-- 资源教学 -->
    </div>
</template>

<script>
    import NewsList from '../news/newslist';
    import TrainList from '../scheme/trainlist';

    export default {
        name: "index",
        components: {
            NewsList,
            TrainList
        }
    }
</script>

<style lang='less'>
    @import "../../assets/common/var";

    .jidi {
        .section-container {
            section {
                margin: 10px 0;
            }

            .jidi-intro-concat {
                display: flex;
                font-size: 15px;

                .jidi-intro-title {
                    background-color: @skin-color;
                    color: #fff;
                    padding: 5px 0 5px 10px;
                }

                .jidi-intro-content {
                    background-color: #f4f3f1;
                    display: flex;
                    line-height: 31px;
                    padding: 0 20px;
                    flex-grow: 1;

                    .jidi-intro-tel {
                        color: #c40001;
                        padding-left: 10px;
                    }
                }
            }

            .new-tech-list {
                margin-top: 10px;

                .new-tech-item {
                    position: relative;
                    margin-top: 5px;
                    overflow: hidden;

                    .new-tech-content {
                        position: absolute;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        color: #fff;
                        padding: 5px 15px 5px 65px;

                        header {
                            font-size: 14px;
                        }
                    }
                }
            }

            .tech-res-list {
                display: flex;
                flex-wrap: wrap;

                .tech-res-item {
                    width: 33.3%;
                    margin-top: 10px;
                    text-align: center;

                    .tech-res-name {
                        margin-top: 5px;
                    }
                }
            }
        }
    }
</style>