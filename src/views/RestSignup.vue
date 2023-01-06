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
                                        <v-text-field v-model="name" label="name" type="text" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field v-model="address" label="address" type="text" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field v-model="bio" label="bio" type="text" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field v-model="city" label="city" type="text" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field v-model="email" label="email" prepend-inner-icon="mdi-mail"
                                            type="email" class="rounded-0" outlined></v-text-field>
                                        <v-text-field v-model="password" label="password" prepend-inner-icon="mdi-lock"
                                            type="password" class="rounded-0" outlined></v-text-field>
                                        <v-text-field v-model="phoneNum" label="phoneNum" prepend-inner-icon="mdi-phone"
                                            type="phoneNum" class="rounded-0" outlined></v-text-field>
                                        <!-- <v-text-field label="avatar" name="picture (optional)"
                                                prepend-inner-icon="mdi-user" type="img" class="rounded-0"
                                                outlined></v-text-field> -->
                                        <v-btn @click="restoReg" type="submit" class="rounded-0" color="#000000" x-large
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
// import { emit } from 'process';
// import router from '@/router';
import cookies from 'vue-cookies';

export default {
    name: "RestSignup",
    data() {
        return {
            name: "",
            address: "",
            bio: "",
            city: "",
            email: "",
            password: "",
            phoneNum: "",
            bannerUrl: null,
            profileUrl: null,
        }
    },
    methods: {
        restoReg() {
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                header: {
                    "x-api-key": "lGzWJ81l4YDt4UPA3aOWTjxDZUxZy2eTxrHjoPy9mPfqX",
                },
                method: `POST`,
                data: {
                    name: this.name,
                    address: this.address,
                    bio: this.bio,
                    city: this.city,
                    email: this.email,
                    password: this.password,
                    phoneNum: this.phoneNum,
                    bannerUrl: null,
                    profileUrl: null,
                },
            }).then((response) => {
                console.log(response.data);
                let restInfo = response.data.token;
                cookies.set(`restToken`, restInfo);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                console.log(`if you see this, it's not doing what you expect`);
            })
        }
    },
    mounted() {
        console.log(this.$cookies.get(`restToken`.restaurantId));
    },
}
</script>

<style scoped>

</style>