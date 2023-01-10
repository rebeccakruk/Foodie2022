<template>
    <div>
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
                                    <v-text-field v-model="username" label="username" prepend-inner-icon="mdi-pencil"
                                        type="text" class="rounded-0" outlined></v-text-field>
                                    <v-text-field v-model="firstName" label="firstName" prepend-inner-icon="mdi-pencil"
                                        type="text" class="rounded-0" outlined></v-text-field>
                                    <v-text-field v-model="lastName" label="lastName" prepend-inner-icon="mdi-pencil"
                                        type="text" class="rounded-0" outlined></v-text-field>
                                    <v-text-field v-model="password" label="new password"
                                        :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                                        @click:append="() => (value = !value)" :type="value ? 'password' : 'text'"
                                        class="rounded-0" outlined></v-text-field>
                                    <v-text-field v-model="pictureUrl" label="picture (optional)"
                                        prepend-inner-icon="mdi-camera" type="img" class="rounded-0"
                                        outlined></v-text-field>
                                    <v-btn @click="postIt" type="submit" class="rounded-0" color="#000000" x-large block
                                        dark>Submit Changes</v-btn>
                                    <v-btn type="submit" class="rounded-0" color="#8255" large block dark><router-link
                                            to="/delete" class="rounded-0" color:="#8255">Delete
                                            Account</router-link></v-btn>
                                    <v-spacer></v-spacer>
                                    <v-card-actions class="text--secondary">
                                        <v-spacer></v-spacer>
                                        <router-link to="/restaurant/:restaurantId" class="pl-2"
                                            style="color: #000000">Home</router-link>
                                    </v-card-actions>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import axios from 'axios';
import router from '@/router';
import cookies from 'vue-cookies';

export default {
    name: "EditTwo",
    data() {
        return {
            email: "",
            username: "",
            firstName: "",
            lastName: "",
            password: "",
            pictureUrl: {
                type: String
            },
            value: String,
        }
    },
    methods: {
        postIt() {
            let token = cookies.get('token')
            axios.request({
                url: 'https://foodierest.ml/api/client',
                method: 'PATCH',
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    "token": token
                },
                data: {
                    email: this.email,
                    username: this.username,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password,
                    pictureUrl: this.pictureUrl
                }
            }).then((response) => {
                console.log(response, 'hello!');
                router.push('/')
            }).catch((error) => {
                console.log(error);
            })
        },
        eraseUser() {
            let token = cookies.get('token')
            console.log(token);
            axios.request({
                url: 'https://foodierest.ml/api/client',
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    "token": token
                },
                method: 'DELETE',
            }).then((response) => {
                console.log(response);
                cookies.remove('token')
                if (token == null) {
                    router.push("/")
                } else {
                    return true
                }
            })
        }
    }
}
</script>

<style scoped>

</style>