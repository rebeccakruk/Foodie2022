<template>
    <div>
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
                                        <v-text-field v-model="username" label="username" type="text" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field v-model="firstName" label="firstName" type="text"
                                            class="rounded-0" outlined></v-text-field>
                                        <v-text-field v-model="lastName" label="lastName" type="text" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field v-model="password" label="password" type="password"
                                            class="rounded-0" outlined></v-text-field>
                                        <v-text-field label="picture (optional)" prepend-inner-icon="mdi-camera"
                                            type="img" class="rounded-0" outlined></v-text-field>
                                        <v-btn @click="register" type="submit" class="rounded-0" color="#000000" x-large
                                            block dark>Register</v-btn>
                                        <v-card-actions class="text--secondary">
                                            <v-spacer></v-spacer>
                                            <!-- <RouterLink :to="{ name: 'SignUp' }">Sign Up</RouterLink> -->
                                            Already registered? <router-link to="/signIn" class="pl-2"
                                                style="color: #000000">Go
                                                back
                                                to Login</router-link>
                                        </v-card-actions>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
import cookies from 'vue-cookies';

export default {
    name: "ClientSignup",
    data() {
        return {
            email: "",
            username: "",
            firstName: "",
            lastName: "",
            password: "",
            clientId: "",
            pictureUrl: {
                type: String
            },
            token: ""
        }
    },
    methods: {
        register() {
            axios.request({
                url: `https://foodierest.ml/api/client`,
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                },
                method: 'POST',
                data: {
                    email: this.email,
                    username: this.username,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password,
                    pictureUrl: this.pictureUrl,
                    clientId: this.clientId,
                    token: this.token
                },
            }).then((response) => {
                let token = response.data;
                console.log(token);
                cookies.set(`token`, response.data.token);
                router.push("/");
            }).catch((error) => {
                console.log(error);
                alert('That email is already registered with Foodie. Please sign in, or try again.')
            }).finally(() => {
                console.log(`here we go again`);
            })
        },
    }
}
</script>

<style scoped>

</style>