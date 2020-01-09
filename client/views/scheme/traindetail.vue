<template>
    <div class="train-detail">
        <header class="train-detail-title"><span>瑞金三天</span>培训方案</header>
        <ul class="train-detail-list">
            <li class="train-detail-item">
                <header class="train-detail-content-title">D1 全天</header>
                <p class="train-detail-content">1.学员报到，办理入住</p>
            </li>
            <li class="train-detail-item">
                <header class="train-detail-content-title">D2 上午</header>
                <p class="train-detail-content">1.开班仪式：奏唱国歌，学员领导致辞、学员代表发言、带队领导讲话等</p>
                <p class="train-detail-content">2.主题教学：《中央苏区与苏区精神》或者双方确定教学主题</p>
            </li>
            <li class="train-detail-item">
                <header class="train-detail-content-title">D3 下午</header>
                <p class="train-detail-content">1.开班仪式：奏唱国歌，学员领导致辞、学员代表发言、带队领导讲话等</p>
                <p class="train-detail-content">2.主题教学：《中央苏区与苏区精神》或者双方确定教学主题</p>
            </li>
            <li class="train-detail-item">
                <header class="train-detail-content-title">D4 全天</header>
                <p class="train-detail-content">1.开班仪式：奏唱国歌，学员领导致辞、学员代表发言、带队领导讲话等</p>
                <p class="train-detail-content">2.主题教学：《中央苏区与苏区精神》或者双方确定教学主题</p>
            </li>
            <li class="train-detail-item">
                <header class="train-detail-content-title">D5 全天</header>
                <p class="train-detail-content">1.开班仪式：奏唱国歌，学员领导致辞、学员代表发言、带队领导讲话等</p>
                <p class="train-detail-content">2.主题教学：《中央苏区与苏区精神》或者双方确定教学主题</p>
            </li>
            <li class="train-detail-item">
                <header class="train-detail-content-title">D6 全天</header>
                <p class="train-detail-content">1.开班仪式：奏唱国歌，学员领导致辞、学员代表发言、带队领导讲话等</p>
                <p class="train-detail-content">2.主题教学：《中央苏区与苏区精神》或者双方确定教学主题</p>
            </li>
            <li class="train-detail-item">
                <header class="train-detail-content-title">D7 全天</header>
                <p class="train-detail-content">1.开班仪式：奏唱国歌，学员领导致辞、学员代表发言、带队领导讲话等</p>
                <p class="train-detail-content">2.主题教学：《中央苏区与苏区精神》或者双方确定教学主题</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "train-detail"
    }
</script>

<style lang='less'>
    @import '../../assets/common/var';

    .train-detail {
        padding: 0 20px;

        .train-detail-title {
            text-align: center;
            font-size: 16px;
            margin: 20px 0;
        
            span {
                color: @skin-color;
            }
        }

        .train-detail-list {
            display: flex;
            flex-direction: column;

            .train-detail-item {
                margin-bottom: 20px;

                .train-detail-content-title {
                    font-size: 15px;
                    color: #9a0a0d;
                    margin-bottom: 5px;
                }

                .train-detail-content {
                    font-size: 13px;
                    line-height: 22px;
                }
            }
        }
    }
</style>