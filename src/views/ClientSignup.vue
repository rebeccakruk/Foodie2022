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
                                        <!-- <v-text-field label="avatar" name="picture (optional)"
                                            prepend-inner-icon="mdi-user" type="img" class="rounded-0"
                                            outlined></v-text-field> -->
                                        <v-btn @click="register" type="submit" class="rounded-0" color="#000000" x-large
                                            block dark>Register</v-btn>
                                        <v-card-actions class="text--secondary">
                                            <v-spacer></v-spacer>
                                            <!-- <RouterLink :to="{ name: 'SignUp' }">Sign Up</RouterLink> -->
                                            Already registered? <a href="/login" class="pl-2" style="color: #000000">Go
                                                back
                                                to Login</a>
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
// import router from '@/router';
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
        }
    },
    methods: {
        register() {
            axios.request({
                url: "https://foodierest.ml/api/client",
                header: {
                    "x-api-key": "lGzWJ81l4YDt4UPA3aOWTjxDZUxZy2eTxrHjoPy9mPfqX",
                },
                method: 'POST',
                data: {
                    email: this.email,
                    username: this.username,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password
                    // pictureUrl: 
                    // client_id: 203
                },
            }).then((response) => {
                console.log(response);
                cookies.set(`registered`)
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                console.log(`here we go again`);
            })
        }
    },
}
</script>

<style scoped>

</style>