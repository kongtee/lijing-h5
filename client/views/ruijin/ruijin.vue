<template>
    <div class="ruijin-container">
        <div class="news-header">
            <header>走进瑞金</header>
        </div>
        <ul class="college-list">
            <li class="college-item">
                <a class="college-item-wrap" href="#/news/detail">
                    <div class="college-item-image">
                        <img src="@Assets/images/index01.jpg">
                    </div>
                    <div class="college-item-content">瑞金沙洲坝</div>
                </a>
            </li>
            <li class="college-item">
                <a class="college-item-wrap" href="#/news/detail">
                    <div class="college-item-image">
                        <img src="@Assets/images/index01.jpg">
                    </div>
                    <div class="college-item-content">瑞金"二苏大"</div>
                </a>
            </li>
            <li class="college-item">
                <a class="college-item-wrap" href="#/news/detail">
                    <div class="college-item-image">
                        <img src="@Assets/images/index01.jpg">
                    </div>
                    <div class="college-item-content">于都</div>
                </a>
            </li>
            <li class="college-item">
                <a class="college-item-wrap" href="#/news/detail">
                    <div class="college-item-image">
                        <img src="@Assets/images/index01.jpg">
                    </div>
                    <div class="college-item-content">大栢地战斗遗址</div>
                </a>
            </li>
            <li class="college-item">
                <a class="college-item-wrap" href="#/news/detail">
                    <div class="college-item-image">
                        <img src="@Assets/images/index01.jpg">
                    </div>
                    <div class="college-item-content">古田会议纪念馆</div>
                </a>
            </li>
            <li class="college-item">
                <a class="college-item-wrap" href="#/news/detail">
                    <div class="college-item-image">
                        <img src="@Assets/images/index01.jpg">
                    </div>
                    <div class="college-item-content">兴国</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ruijin"
    }
</script>

<style lang='less'>
    .ruijin-container {
        overflow: hidden;

        .college-list {
            display: flex;
            flex-wrap: wrap;
            padding: 15px 0;

            .college-item {
                width: 50%;
                margin: 15px 0 0;

                .college-item-wrap {
                    display: flex;
                    flex-direction: column;

                    .college-item-image {
                        overflow: hidden;
                        flex-shrink: 0;

                        img {
                            width: 100%;
                        }
                    }

                    .college-item-content {
                        text-align: center;
                        font-size: 12px;
                    }
                }
            }

            .college-item:nth-child(even) .college-item-wrap {
                margin-left: 6px;
            }

            .college-item:nth-child(odd) .college-item-wrap {
                margin-right: 6px;
            }
        }
    }
</style>