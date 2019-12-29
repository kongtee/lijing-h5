<template>
    <div class="scheme-container">
        <ul>
            <li>
                <header class="train-title"><span>瑞金</span>培训方案</header>
                <TrainList></TrainList>
                <div class="train-concat">
                    <div class="train-concat-wrap">
                        <div>联系人：李老师</div>
                        <div>联系手机：18612705773</div>
                    </div>
                    <div class="train-concat-wrap">
                        <div>联系电话：4001551911</div>
                        <div>联系微信：13112344321</div>
                    </div>
                    <div>联系邮箱：ruijinred@163.com</div>
                </div>
            </li>
            <li>
                <header class="train-title"><span>瑞金</span>培训方案</header>
                <TrainList></TrainList>
                <div class="train-concat">
                    <div class="train-concat-wrap">
                        <div>联系人：李老师</div>
                        <div>联系手机：18612705773</div>
                    </div>
                    <div class="train-concat-wrap">
                        <div>联系电话：4001551911</div>
                        <div>联系微信：13112344321</div>
                    </div>
                    <div>联系邮箱：ruijinred@163.com</div>
                </div>
            </li>
            <li>
                <header class="train-title"><span>瑞金</span>培训方案</header>
                <TrainList></TrainList>
                <div class="train-concat">
                    <div class="train-concat-wrap">
                        <div>联系人：李老师</div>
                        <div>联系手机：18612705773</div>
                    </div>
                    <div class="train-concat-wrap">
                        <div>联系电话：4001551911</div>
                        <div>联系微信：13112344321</div>
                    </div>
                    <div>联系邮箱：ruijinred@163.com</div>
                </div>
            </li>
        </ul>
        <div class="ruijin-wrap">
            <Ruijin></Ruijin>
        </div>
        <div class="course-wrap">
            <div class="news-header">
                <header>课程</header>
            </div>
            <ul class="course-list">
                <li class="course-item"><a class="course-content" href="#">教育系统专题课程</a></li>
                <li class="course-item"><a class="course-content" href="#">农业系统专题课程</a></li>
                <li class="course-item"><a class="course-content" href="#">农业系统专题课程</a></li>
                <li class="course-item"><a class="course-content" href="#">政协系统专题课程</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import TrainList from './trainlist';
    import Ruijin from '../ruijin/ruijin';

    export default {
        name: "scheme",
        components: {
            TrainList,
            Ruijin
        },
        data() {
            return {}
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

<style lang='less'>
    @import "../../assets/common/var";

    .scheme-container {
        padding: 20px;

        .train-title {
            text-align: center;
            font-size: 18px;

            span {
                color: @skin-color
            }
        }

        .train-concat {
            background-color: #f4f3f1;
            padding: 10px 15px;
            font-size: 12px;
            margin: 15px 0;

            .train-concat-wrap {
                display: flex;
                justify-content: space-between;
            }
        }

        .ruijin-wrap {
            margin-top: 30px;
        }

        .course-wrap {
            margin-top: 30px;

            .course-list {
                display: flex;
                flex-wrap: wrap;

                .course-item {
                    width: 50%;
                    margin-top: 10px;

                    .course-content {
                        background-color: #eee;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        display: block;
                    }
                }

                .course-item:nth-child(even) .course-content {
                    margin-left: 6px;
                }

                .course-item:nth-child(odd) .course-content {
                    margin-right: 6px;
                }
            }
        }
    }
</style>