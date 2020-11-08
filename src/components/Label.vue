<template>
    <div class="label">
        <span class="label-text">Photo Gallery</span>
    </div>
</template>

<script>
    export default {
        name: 'Label'
    }
</script>

<style lang="less">
    .label {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;

        & .label-text {
            padding: 1rem;
            color: #fff;
            font-size: 2rem;
            background: #00B8EA;
        }
    }
</style>