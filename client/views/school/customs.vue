<template>
    <div class="custom-container">
        <ul class="custom-list">
            <li class="custom-item">
                <a href="javascript:void(0)">
                    <img src="@Assets/images/img01.jpg">
                </a>
                <div class="custom-name">毛泽东旧居</div>
            </li>
            <li class="custom-item">
                <a href="javascript:void(0)">
                    <img src="@Assets/images/img01.jpg">
                </a>
                <div class="custom-name">毛泽东旧居</div>
            </li>
            <li class="custom-item">
                <a href="javascript:void(0)">
                    <img src="@Assets/images/img01.jpg">
                </a>
                <div class="custom-name">毛泽东旧居</div>
            </li>
            <li class="custom-item">
                <a href="javascript:void(0)">
                    <img src="@Assets/images/img01.jpg">
                </a>
                <div class="custom-name">毛泽东旧居</div>
            </li>
            <li class="custom-item">
                <a href="javascript:void(0)">
                    <img src="@Assets/images/img01.jpg">
                </a>
                <div class="custom-name">毛泽东旧居</div>
            </li>
            <li class="custom-item">
                <a href="javascript:void(0)">
                    <img src="@Assets/images/img01.jpg">
                </a>
                <div class="custom-name">毛泽东旧居</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "custom"
    }
</script>

<style lang='less'>
    @import "../../assets/common/var";
        .custom-container {
            padding: 20px;

            .custom-list {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .custom-item {
                    width: 30%;
                    margin-top: 10px;
                    text-align: center;

                    .custom-name {
                        margin-top: 5px;
                    }
                }
            }
        }
</style>