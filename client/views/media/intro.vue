<template>
    <div class="media-intro">
        <div class="media-video">
            <video></video>
        </div>
        <div class="media-content-wrap">
            <img class="media-content-bg" src="@Assets/images/video_bg.jpg">
            <div class="media-content">
                <header>瑞金培训现场</header>
                <p>邀请最早在井冈山圣诞节烦死了荆防颗粒实际开始减税降费减少负担就是发生；副书记</p>
            </div>
        </div>
        <div class="media-more-container">
            <div class="news-header">
                <header>更多媒体介绍</header>
            </div>
            <ul class="media-more-list">
                <li class="media-more-item">
                    <div class="media-more-item-wrap">
                        <div class="media-more-item-image">
                            <video></video>
                        </div>
                        <div class="media-more-item-content">瑞金沙洲坝</div>
                    </div>
                </li>
                <li class="media-more-item">
                    <div class="media-more-item-wrap">
                        <div class="media-more-item-image">
                            <video></video>
                        </div>
                        <div class="media-more-item-content">瑞金"二苏大"</div>
                    </div>
                </li>
                <li class="media-more-item">
                    <div class="media-more-item-wrap">
                        <div class="media-more-item-image">
                            <video></video>
                        </div>
                        <div class="media-more-item-content">于都</div>
                    </div>
                </li>
                <li class="media-more-item">
                    <div class="media-more-item-wrap">
                        <div class="media-more-item-image">
                            <video></video>
                        </div>
                        <div class="media-more-item-content">大栢地战斗遗址</div>
                    </div>
                </li>
                <li class="media-more-item">
                    <div class="media-more-item-wrap">
                        <div class="media-more-item-image">
                            <video></video>
                        </div>
                        <div class="media-more-item-content">古田会议纪念馆</div>
                    </div>
                </li>
                <li class="media-more-item">
                    <div class="media-more-item-wrap">
                        <div class="media-more-item-image">
                            <video></video>
                        </div>
                        <div class="media-more-item-content">兴国</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "intro"
    }
</script>

<style lang='less'>
    .media-intro {
        .media-video {
            width: 100%;
            height: 100px;

            video {
                width: 100%;
            }
        }

        .media-content-wrap {
            position: relative;

            .media-content-bg {
                width: 100%;
            }

            .media-content {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                color: #fff;
                padding: 15px;
                overflow: hidden;

                header {
                    font-size: 14px;
                }

                p {
                    font-size: 12px;
                    margin-top: 5px;
                }
            }
        }

        .media-more-container {
            margin: 20px;
            overflow: hidden;
            
            .media-more-list {
                display: flex;
                flex-wrap: wrap;
                padding: 15px 0;

                .media-more-item {
                    width: 50%;
                    margin: 15px 0 0;

                    .media-more-item-wrap {
                        display: flex;
                        flex-direction: column;

                        .media-more-item-image {
                            overflow: hidden;
                            flex-shrink: 0;

                            video {
                                width: 100%;
                            }
                        }

                        .media-more-item-content {
                            text-align: center;
                            font-size: 12px;
                        }
                    }
                }

                .media-more-item:nth-child(even) .media-more-item-wrap {
                    margin-left: 6px;
                }

                .media-more-item:nth-child(odd) .media-more-item-wrap {
                    margin-right: 6px;
                }
            }
        }
    }
</style>