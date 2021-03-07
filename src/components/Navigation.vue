<template>
    <nav class="navigation">
        <a href='#'>Home</a>
        <a href="/contact">Contact Us</a>
        <a
                id="NavigationLanguage"
                class="navigation-language"
                @click="showListLanguages"
        >
            Language
            <ListLanguages ref="ListLanguages" />
        </a>
        <a href="/admin">Admin</a>
    </nav>
</template>

<script>
    import ListLanguages from "./ListLanguages.vue";

    export default {
        name: 'Navigation',

        components: {
            ListLanguages
        },

        methods: {
            showListLanguages() {
                this.$refs.ListLanguages.onShow();
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

            &.navigation-language {
                position: relative;
            }
        }
    }
</style>