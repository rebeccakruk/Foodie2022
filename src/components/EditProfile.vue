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
                                        <v-btn @click="submitEdit" type="submit" class="rounded-0" color="#000000"
                                            x-large block dark>Submit Changes</v-btn>
                                        <v-card-actions class="text--secondary">
                                            <v-spacer></v-spacer>
                                            <router-link to="/" class="pl-2" style="color: #000000">Home</router-link>
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
    name: "EditProfile",
    data() {
        return {
            email: "",
            username: "",
            firstName: "",
            lastName: "",
            password: "",
            clientId: "",
            token: ""
        }
    },
    methods: {
        submitEdit() {
            let clientToken = cookies.get('clientToken')
            axios.request({
                url: `https://foodierest.ml/api/client`,
                header: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    "token": clientToken
                },
                method: 'PATCH',
                data: {
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
                router.push("/");
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                console.log(`here we go again`);
            })
        }
    }
}
</script>

<style scoped>

</style>