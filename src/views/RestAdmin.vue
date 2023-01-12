<template>
    <div>
        <h1>Restaurant Admin Dashboard</h1>
        <v-row aligned="center" justify="space-around">
            <v-btn>View Orders</v-btn>
            <v-btn color="blue"><router-link to="/menu">View Menu</router-link>
            </v-btn>
            <v-btn @click="restOwn" color="green"><router-link to="/rest-edit"></router-link>
                Edit Profile
            </v-btn>
            <v-btn color="red"><router-link to="/rest-signout">Sign Out</router-link>

            </v-btn>
        </v-row>
        <MenuCard />
    </div>
</template>

<script>
// import RestSignup from '@/components/RestSignup.vue';
// import router from "@/router";
import cookies from 'vue-cookies';
import axios from 'axios';

import MenuCard from '@/components/MenuCard.vue';


export default {
    name: "RestMain",
    components: {
        MenuCard,
    },
    methods: {
        loadRest() {
            let restId = cookies.get('restId')
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                params: {
                    restaurantId: restId
                },
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                },
                method: "GET"
            }).then((response) => {
                console.log(response);
                // router.push('/rest-admin')
            }).catch((error) => {
                console.log(error);
                alert("no restaurant");
            })
        },
        getMenu() {
            console.log(this.$route.params.restaurantId);
            axios.request({
                url: "https://foodierest.ml/api/menu",
                params: {
                    restaurantId: this.$route.params.restaurantId,
                    menuId: ""
                },
                method: "GET",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                },
            }).then((response) => {
                console.log(response);
                for (let item of this.menu)
                    console.log(item);
                this.menu = response;
            }).catch((error) => {
                console.log(error);
                alert("no food");
            });
        }
    },
    mounted() {
        this.loadRest();
    }
}

</script>

<style scoped>

</style>