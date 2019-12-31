<template>
    <div class="concat">
        <div class="concat-map">
            <img src="@Assets/images/map.jpg">
        </div>
        <div class="concat-info">
            <header>瑞金苏区干部学院</header>
            <div>服务热线：400-155-1911</div>
            <div>联系地址：江西省瑞金市象湖镇红都大道金源大厦</div>
            <div>联系电话：15083931223</div>
            <div>联系人：杨书婷</div>
            <div class="concat-beijing">驻京电话：18612705779</div>
            <div>联系人：李鸿</div>
        </div>
        <!-- 培训流程 -->
        <div class="section-container">
            <div class="news-header">
                <header>培训流程</header>
            </div>
            <div class="scheme-wrap">
                <img src="@Assets/images/lcimg.jpg">
            </div>
        </div>
        <!-- 培训流程 -->
        <!-- 下载中心 -->
        <div class="download-container">
            <div class="news-header">
                <header>下载中心</header>
            </div>
            <div class="download-wrap">
                <img src="@Assets/images/aboutus_bg01.png">
                <a class="download-missive" href="javascript:void(0)"></a>
                <a class="download-text" href="javascript:void(0)"></a>
            </div>
        </div>
        <!-- 下载中心 -->
        <!-- 在线提交报名需求 -->
        <div class="submit-container">
            <div class="news-header">
                <header>在线提交报名需求</header>
            </div>
            <form action="#">
                <div class="submit-concat">
                    <div class="submit-concat-wrap">
                        <label for="name">您的姓名：</label>
                        <input id="name" placeholder="请输入您的姓名……" required>
                    </div>
                    <div class="submit-concat-wrap">
                        <label for="telphone">您的电话：</label>
                        <input id="telphone" max="11" placeholder="请输入您的电话……" required>
                    </div>
                </div>
                <div class="submit-train">
                    <label for="train">培训班概况：</label>
                    <textarea rows="3" id="train" placeholder="有定制化需求请填写，或者填无" required />
                </div>
                <div class="submit-wrap">
                    <input class="submit-btn" type="submit" value="">
                </div>
            </form>
        </div>
        <!-- 在线提交报名需求 -->
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang='less'>
    .concat {
        .concat-map img {
            width: 100%;
            display: block;
        }

        .concat-info {
            background-color: #2c2a3e;
            padding: 15px;
            color: #fff;

            header {
                margin-bottom: 5px;
            }

            .concat-beijing {
                margin-top: 10px;
            }
        }

        .section-container {
            margin: 20px;
            overflow: hidden;

            .scheme-wrap {
                margin-top: 10px;
            }
        }

        .download-container {
            overflow: hidden;

            .news-header {
                margin: 0 20px;
            }

            .download-wrap {
                margin-top: 10px;
                position: relative;

                .download-missive {
                    background: url('../../assets/images/aboutus_icon02.png');
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    background-size: 60px;
                    margin: -30px 0 0 -75px;
                }

                .download-text {
                    background: url('../../assets/images/aboutus_icon01.png');
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    background-size: 60px;
                    margin: -30px 0 0 15px;
                }
            }
        }

        .submit-container {
            margin: 20px;
            overflow: hidden;

            .submit-concat {
                display: flex;
                margin: 25px 0;
                justify-content: space-between;

                .submit-concat-wrap {
                    display: flex;
                    flex-direction: column;
                    width: 46%;
                }
            }

            .submit-train {
                display: flex;
                flex-direction: column;
            }

            label:before {
                content: '* ';
                color: red;
            }

            input, textarea {
                margin-top: 10px;
            }

            .submit-wrap {
                text-align: center;
                margin: 20px 0 15px;

                .submit-btn {
                    background-image: url('../../assets/images/aboutus_button_on.png');
                    background-size: 83px 30px;
                    width: 83px;
                    height: 30px;
                    border: none;
                }

            }
        }
    }
</style>