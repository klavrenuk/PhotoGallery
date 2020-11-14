<template>
    <div class="loading">
        <img :src="'./src/images/preloader.svg'" />
    </div>
</template>

<script>
    export default {
        name: 'Loading'
    }
</script>

<style lang="less">
    .loading {
        text-align: center;
    }
</style>