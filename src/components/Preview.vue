<template>
    <div class="preview"
        :class="isShow ? 'show' : ''"
    >
        <b-row>
            <b-col cols="12" md="8">
                <PreviewPhoto />
            </b-col>
            <b-col cols="12" md="4">
                <PreviewInfo />
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import PreviewPhoto from './PreviewPhoto.vue'
    import PreviewInfo from './PreviewInfo.vue'

    export default {
        name: 'Preview',

        components: {PreviewInfo, PreviewPhoto},

        data() {
            return {
                isShow: true
            }
        }
    }
</script>

<style lang="less">
    .preview {
        display: none;

        &.show {
            display: block;
        }
    }
</style>