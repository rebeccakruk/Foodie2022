<template>
    <div>
        <div v-for="rest in restaurants" :key="rest.id">
            <router-link :to="'/rest-main/' + rest.id">{{ rest.name }}</router-link>
        </div>
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
                                    <v-text-field label="name" prepend-inner-icon="mdi-pencil" type="text"
                                        class="rounded-0" outlined></v-text-field>

                                    <v-text-field v-model="address" label="address" prepend-inner-icon="mdi-pencil"
                                        type="text" class="rounded-0" outlined></v-text-field>

                                    <v-text-field v-model="bio" label="bio" prepend-inner-icon="mdi-pencil" type="text"
                                        class="rounded-0" outlined></v-text-field>

                                    <v-text-field v-model="city" label="city" prepend-inner-icon="mdi-pencil"
                                        type="text" class="rounded-0" outlined></v-text-field>

                                    <v-text-field v-model="phoneNum" label="phone number" prepend-inner-icon="mdi-phone"
                                        type="text" class="rounded-0" outlined></v-text-field>

                                    <v-text-field v-model="bannerUrl" label="banner (recommended)"
                                        prepend-inner-icon="mdi-camera" type="img" class="rounded-0"
                                        outlined></v-text-field>

                                    <v-text-field v-model="pictureUrl" label="picture (recommended)"
                                        prepend-inner-icon="mdi-camera" type="img" class="rounded-0"
                                        outlined></v-text-field>

                                    <v-btn @click="confirmEdit" type="submit" class="rounded-0" color="#000000" x-large
                                        block dark>Confirm Changes</v-btn>

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
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

export default {
    name: "RestaurantEdit",
    data() {
        return {
            name: String,
            address: "",
            bannerUrl: "",
            bio: String,
            city: String,
            email: String,
            phoneNum: Number,
            pictureUrl: String,
            restaurantId: Number,
            restaurants: []
        }
    },
    methods: {
        confirmEdit() {
            let token = cookies.get('restToken')
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                headers: {
                    "token": token,
                    "x-api-key": process.env.VUE_APP_API_KEY
                },
                method: "PATCH",
                data: {
                    name: this.name,
                    address: this.address,
                    bannerUrl: this.bannerUrl,
                    bio: this.bio,
                    city: this.city,
                    email: this.email,
                    phoneNum: this.phoneNum,
                    pictureUrl: this.pictureUrl,
                    restaurantId: this.restaurantId
                }
            }).then((response) => {
                console.log(response.data);
            }).catch((error) => {
                console.log(error);
                alert('nope')
            })
        },
        loadResto() {
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY
                },
                method: "GET",
            }).then((response) => {
                let info = response.data
                console.log(info);
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.loadResto()
    }
}

</script>

<style scoped>

</style>