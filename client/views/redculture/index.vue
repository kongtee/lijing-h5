<template>
    <div class="redculture">
        <div class="redculture-images-wrap">
            <div class="redculture-images-left">
                <div><img src="@Assets/images/redculture01.jpg"></div>
                <div><img src="@Assets/images/redculture02.jpg"></div>
            </div>
            <div class="redculture-images-right">
                <div><img src="@Assets/images/redculture03.jpg"></div>
                <div class="redculture-images-right-bottom">
                    <div class="redculture-images-right-bottom-left"><img src="@Assets/images/redculture04.jpg"></div>
                    <div class="redculture-images-right-bottom-right"><img src="@Assets/images/redculture05.jpg"></div>
                </div>
            </div>
        </div>
        <div class="redculture-video-wrap">
            <div class="redculture-video-intro">
                <img src="@Assets/images/redculture06.jpg">
                <div class="redculture-video-intro-wrap">
                    <header>红创文化</header>
                    <section>
                        100%的满意服务100%的满意服务100%的满意服务100%的满意服务100%的满意服务100%的满意服务100%的满意服务100%的满意服务100%的满意服务
                    </section>
                </div>
            </div>
            <div class="redculture-video">
                <video></video>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang='less'>
    .redculture {
        .redculture-images-wrap {
            display: flex;
            justify-content: space-between;

            .redculture-images-left {
                width: 31%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }

            .redculture-images-right {
                width: 68%;

                .redculture-images-right-bottom {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;

                    .redculture-images-right-bottom-left {
                        width: 45%;
                    }

                    .redculture-images-right-bottom-right {
                        width: 53%;
                    }
                }
            }
        }

        img, video {
            width: 100%;
            display: block;
        }

        .redculture-video-wrap {
            display: flex;
            margin-top: 25px;

            .redculture-video-intro {
                width: 50%;
                position: relative;

                .redculture-video-intro-wrap {
                    position: absolute;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    padding: 40px 20px 20px 15px;

                    header {
                        color: #3d3d3e;
                        font-size: 15px;
                        margin-bottom: 10px;
                    }
                }
            }

            .redculture-video {
                width: 50%;
            }
        }
    }
</style>