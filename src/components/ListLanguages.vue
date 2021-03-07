<template>
    <div class="listLanguages">
        <ul v-if="isShow">
            <li v-for="lang in languages"
                :class="lang.isActive ? 'active' : ''"
            >
                <button
                        class="btn btn-link btn--lang"
                        @click="onChoiceLang(lang)"
                >
                    {{lang.name}}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "ListLanguages",

        data() {
            return {
                languages: [
                    {
                        name: 'English',
                        prop: 'en',
                        isActive: true
                    },
                    {
                        name: 'Russian',
                        prop: 'ru',
                        isActive: false
                    },
                    {
                        name: 'German',
                        prop: 'de',
                        isActive: false
                    }
                ],
                currentLang: 'en',
                isShow: false
            }
        },

        methods: {
            onShow() {
                this.isShow = true;
            },

            onChoiceLang(lang) {
                this.currentLang = lang.prop;
                this.isShow = false;
            },

            initCloseListener() {
                const _this = this;

                document.addEventListener('click', (event) => {
                    const NavigationLanguage = document.querySelector('#NavigationLanguage');

                    if(NavigationLanguage) {
                        if(!NavigationLanguage.contains(event.target)) {
                            _this.isShow = false;
                        }

                    } else {
                        _this.isShow = false;
                    }
                })
            }
        },

        created() {
            this.initCloseListener();
        }
    }
</script>

<style lang="less">
    .listLanguages {
        position: absolute;
        top: 94px;
        left: 0;
        z-index: 9999;
        background: #fff;

        & ul li  {
            padding: 15px 20px;

            &.active,
            &:hover,
            &:active,
            &:focus {
                background: #34495E;

                & button.btn--lang {
                    color: #fff;
                }
            }

            & button.btn--lang {
                padding: 0;
                border: none !important;
                color: #34495e;

                &:hover,
                &:active,
                &:focus {
                    color: #fff;
                }
            }
        }
    }
</style>