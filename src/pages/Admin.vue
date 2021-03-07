<template>
    <section class="admin">
        <div class="container">
            <b-row>
                <b-col sm="12">
                    <h4 class="admin-title">Sign In</h4>
                </b-col>
            </b-row>

            <b-row>
                <b-col sm="12">
                    <b-form
                            @submit="checkForm"
                            action="https://vuejs.org/"
                            method="post"
                            :novalidate="true"
                    >
                        <b-form-group
                                label="Username"
                                label-for="UserName"
                        >
                            <b-form-input
                                    id="UserName"
                                    type="text"
                                    placeholder="Enter login"
                                    required
                                    v-model="auth.userName"
                            >

                            </b-form-input>
                        </b-form-group>

                        <b-form-group
                                label="Password"
                                label-for="Password"
                        >
                            <b-form-input
                                    id="Password"
                                    type="password"
                                    aria-describedby="password-help-block"
                                    required
                                    placeholder="Enter password"
                                    v-model="auth.password"
                            >
                                <b-form-text id="password-help-block">
                                    Your password must be 4-20 characters long, contain letters and numbers, and must not
                                    contain spaces, special characters, or emoji.
                                </b-form-text>

                            </b-form-input>
                        </b-form-group>

                        <b-button
                            type="submit"
                            class="btn--admin_submit"
                        >Sign in</b-button>
                    </b-form>
                </b-col>
            </b-row>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'admin',

        data() {
            return {
                auth: {}
            }
        },

        methods: {
            checkForm(event) {
                const props = ['userName', 'password'];
                let isError = false;

                for(let prop of props) {
                    if(!this.auth[prop] || (this.auth[prop] && !this.auth[prop].trim())) {
                        isError = true;
                        const str = prop + ' is required';
                        alert(str);
                    }
                }

                if(!isError) {
                    return true;
                }

                event.preventDefault();
            }
        }
    }
</script>

<style lang="less">
    .admin {
        max-width: 600px;
        width: 100%;
        margin: 2rem auto;
        padding: 60px 110px;
        background: #f5f5f5;

        & .admin-title {
            margin-bottom: 2rem;
        }

        & .btn--admin_submit {
            width: 100%;
            border: none;

            &:hover,
            &:active,
            &:focus {
                -webkit-transition: all 0.4s;
                -o-transition: all 0.4s;
                -moz-transition: all 0.4s;
                transition: all 0.4s;
                background: -webkit-linear-gradient(to right, #34495E, #00B8EA);
                background: -o-linear-gradient(to right, #34495E, #00B8EA);
                background: -moz-linear-gradient(to right, #34495E, #00B8EA);
                background: linear-gradient(to right, #34495E, #00B8EA);
            }
        }
    }
</style>