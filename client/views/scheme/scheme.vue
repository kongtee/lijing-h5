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
    </div>
</template>

<script>
    import TrainList from './trainlist';
    import Ruijin from '../ruijin/ruijin';

    export default {
        name: "scheme",
        components: {
            TrainList,
            Ruijin
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
    }
</style>