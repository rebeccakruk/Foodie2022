<template>
    <div>
        {{ $route.params.restaurantId }}
        <h1>Restaurant Main Page</h1>
        <h4>Here we will have orders, menu change options, we can confirm or delete orders here too. Send confirmation
            of receipt to users.</h4>
        <v-row aligned="center" justify="space-around">
            <v-btn>View Orders</v-btn>
            <v-btn color="blue">
                View / Edit Menu
            </v-btn>
            <v-btn color="green">
                Update Profile
            </v-btn>
            <v-btn color="red">
                Sign Out
            </v-btn>
        </v-row>

        <RestaurantProfile />
        <RestoSignOut />
        <MenuCard />
        <RestaurantEdit />

    </div>
</template>

<script>
import RestaurantProfile from '@/components/RestaurantProfile.vue';
// import RestSignup from '@/components/RestSignup.vue';
import RestaurantEdit from '@/components/RestaurantEdit.vue';
import RestoSignOut from '@/components/RestoSignOut.vue';

// import cookies from 'vue-cookies';
import axios from 'axios';

import MenuCard from '@/components/MenuCard.vue';

export default {
    name: "RestMain",
    components: {
        RestaurantProfile,
        // RestSignup,
        RestaurantEdit,
        RestoSignOut,
        MenuCard,
        // RestaurantCard
    },
    data() {
        return {
            menu: [],
            restaurant: [],
        }
    },
    methods: {
        seeMenu() {
            axios.request({
                url: "https://foodierest.ml/api/menu",
                params: {
                    restaurantId: 189
                },
                method: 'GET',
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                },
            }).then((response) => {
                console.log(response);
                this.menu = response.data;
                // for (let i = 0; i < this.menu.length; i++)
                console.log(this.menu);
            }).catch((error) => {
                console.log(error);
                alert('no food')
            });
        },
        getResto() {
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                params: {
                    restaurantId: this.$route.params.restaurantId
                },
                method: 'GET',
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                }
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
                alert('no restaurant')
            })
        }
    },
    mounted() {
        this.getResto();
    },
}

</script>

<style scoped>

</style>