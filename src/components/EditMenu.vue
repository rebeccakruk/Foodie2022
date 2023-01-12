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
                                        <v-text-field v-model="name" label="name" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field v-model="description" label="description" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field v-model="price" label="price" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field v-model="imageUrl" label="picture url" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-btn @click="newItem" type="submit" class="rounded-0" color="#000000" x-large
                                            block dark>Add New Item</v-btn>
                                        <v-card-actions class="text--secondary">
                                            <v-checkbox color="#000000" label="Remember Me"></v-checkbox>
                                            <v-spacer></v-spacer>
                                            <router-link to="/rest-admin" class="pl-2" style="color: #000000">Go
                                                Back</router-link>
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
    name: "EditMenu",
    data() {
        return {
            name: "",
            description: "",
            price: "",
            imageUrl: ""
        }
    },
    methods: {
        newItem() {
            let session = cookies.get('restToken')
            axios.request({
                url: "https://foodierest.ml/api/menu",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    "token": session
                },
                data: {
                    name: this.name,
                    description: this.description,
                    price: this.price,
                    imageUrl: this.imageUrl
                },
                method: "POST"
            }).then((response) => {
                let menu = response.data
                console.log(menu);
                router.push('/rest-admin')
            })
        }
    },
}

</script>

<style scoped>

</style>