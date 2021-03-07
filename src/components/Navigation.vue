<template>
    <div class="wrap-navigation">
        <nav class="navigation">
            <a href='#'>Home</a>
            <a href="/contact">Contact Us</a>
            <a @click="showListLanguages">Language</a>
            <a href="/admin">Admin</a>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',

        methods: {
            showListLanguages() {
                console.log('showListLanguages');
            }
        }
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

        a:not([href]):not([class]),
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