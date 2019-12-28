<template>
    <ul class="train-list">
        <li class="train-item">
            <a class="train-item-btn train-item-two" href="#"></a>
        </li>
        <li class="train-item">
            <a class="train-item-btn train-item-three" href="#"></a>
        </li>
        <li class="train-item">
            <a class="train-item-btn train-item-four" href="#"></a>
        </li>
        <li class="train-item">
            <a class="train-item-btn train-item-five" href="#"></a>
        </li>
        <li class="train-item">
            <a class="train-item-btn train-item-six" href="#"></a>
        </li>
        <li class="train-item">
            <a class="train-item-btn train-item-seven" href="#"></a>
        </li>
        <li class="train-item">
            <a class="train-item-btn train-item-custom" href="#"></a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "train"
    }
</script>

<style lang='less'>
    .train-list {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;

        .train-item-btn {
            display: block;
            width: 45px;
            height: 29px;
            background-size: contain;
        }

        .train-item-two {
            background-image: url("../../assets/images/jidi_fangan01.png");
        }

        .train-item-three {
            background-image: url("../../assets/images/jidi_fangan02.png");
        }

        .train-item-four {
            background-image: url("../../assets/images/jidi_fangan03.png");
        }

        .train-item-five {
            background-image: url("../../assets/images/jidi_fangan04.png");
        }

        .train-item-six {
            background-image: url("../../assets/images/jidi_fangan05.png");
        }

        .train-item-seven {
            background-image: url("../../assets/images/jidi_fangan06.png");
        }

        .train-item-custom {
            background-image: url("../../assets/images/jidi_fangan07.png");
        }
    }
</style>