<template>
    <nav class="navigation">
        <a href='#'>Home</a>
        <a href="#">Contact Us</a>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>

<style lang="less">
    .navigation {
        width: 100%;
        height: 95px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #34495E;

        & a {
            padding: 36px 15px;
            color: #7f8e9d;
            font-size: 14px;
            transition: all 0.3s;

            &:hover,
            &:active,
            &:focus {
                color: #fff;
            }
        }
    }
</style>