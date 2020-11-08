<template>
    <div class="slider">
        <img :src="'./src/images/slider1.jpg'"
            alt="Slider image"
        />

        <div class="slider-controller">
            <button class="btn btn-icon">
                <b-icon icon="chevron-left"
                    font-scale="1"
                ></b-icon>
            </button>

            <button class="btn btn-icon">
                <b-icon icon="chevron-right"></b-icon>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Slider'
    }
</script>

<style lang="less">
    .slider {
        position: relative;
        height: 580px;
        display: flex;
        align-items: center;
        overflow: hidden;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        & .slider-controller {
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: space-between;

            & button {
                padding: 1rem !important;
                color: #fff !important;
                background: rgba(153, 153, 153, .5) !important;

                &:hover,
                &:active,
                &:focus {
                    color: #000 !important;
                }
            }
        }
    }
</style>