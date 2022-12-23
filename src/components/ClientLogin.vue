<template>
    <v-app>
        <v-main>
            <v-container class="fill-height" fluid>
                <v-row alignment="center" justify="center" dense>
                    <v-col cols="12" sm="8" md="4" lg="4">
                        <v-card elevation="0">
                            <v-img
                                src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"
                                alt="logo" contain height="222">
                            </v-img>
                            <v-card-text>
                                <v-form>

                                    <v-text-field v-model="email" label="email" prepend-inner-icon="mdi-mail"
                                        type="email" class="rounded-0" outlined></v-text-field>

                                    <v-text-field v-model="password" label="password" prepend-inner-icon="mdi-lock"
                                        type="password" class="rounded-0" outlined></v-text-field>

                                    <v-btn @click="login" type="submit" class="rounded-0" color="#000000" x-large block
                                        dark>Login</v-btn>

                                    <v-card-actions class="text--secondary">
                                        <v-checkbox color="#000000" label="Remember Me"></v-checkbox>

                                        <v-spacer></v-spacer>

                                        No account? <router-link to="/signup" class="pl-2" style="color: #000000">Sign
                                            Up</router-link>
                                    </v-card-actions>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>

</template>

<script>
import axios from "axios";
import router from '@/router';
import cookies from 'vue-cookies';


export default {
    name: "ClientLogin",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        login() {
            axios.request({
                url: `https://foodierest.ml/api/client-login`,
                header: {
                    "x-api-key": "lGzWJ81l4YDt4UPA3aOWTjxDZUxZy2eTxrHjoPy9mPfqX",
                },
                method: `POST`,
                data: {
                    email: this.email,
                    password: this.password
                },
            }).then((response) => {
                cookies.set('clientId', response.data.token)
                this.$root.$emit('isLoggedIn')
                router.push("/")
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    // loadProfile() {
    //     axios.request({
    //         url: 'https://foodierest.ml/api/client',
    //         header: {
    //             "x-api-key": "lGzWJ81l4YDt4UPA3aOWTjxDZUxZy2eTxrHjoPy9mPfqX",
    //             "token": "this.response.data.token"
    //         },
    //         method: 'GET',
    //         data: {
    //             response: [
    //                 {
    //                     clientId: this.clientId,
    //                     createdAt: this.createdAt,
    //                     email: this.email,
    //                     firstName: this.firstName,
    //                     lastName: this.lastName,
    //                     pictureUrl: this.pictureUrl,
    //                     username: this.username
    //                 }
    //             ]
    //         }
    //     }).then((response) => {
    //         let profile = response.data;
    //         console.log(profile);
    //     }).catch((error) => {
    //         console.log(error);
    //     })
}


</script>

<style scoped>

</style>