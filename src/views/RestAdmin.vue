<template>
    <div>
        <v-row aligned="center" justify="space-around">
            <v-btn>View Orders</v-btn>
            <v-btn color="blue"><router-link to="/edit-menu">Edit Menu</router-link>
            </v-btn>
            <v-btn><router-link to="/edit-rest/">Edit Profile</router-link>
            </v-btn>
            <v-btn color="red"><router-link to="/rest-signout">Sign Out</router-link>
            </v-btn>
        </v-row>

        <div v-for="item in menu" :key="item.menuId">
            <img :src="item.imageUrl" alt="no picture">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
            <p>{{ item.price }}</p>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
import axios from 'axios';



export default {
    name: "RestAdmin",
    data() {
        return {
            menu: [],
            imageUrl: {
                type: String,
                default: "https://cdn-icons-png.flaticon.com/512/562/562678.png"
            }
        }
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
            }).catch((error) => {
                console.log(error);
                alert("no restaurant");
            })
        },
        getMenu() {
            let restId = cookies.get('restId')
            axios.request({
                url: "https://foodierest.ml/api/menu",
                params: {
                    restaurantId: restId,
                    menuId: ""
                },
                method: "GET",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                },
            }).then((response) => {
                console.log(response);
                this.menu = response.data;
            }).catch((error) => {
                console.log(error);
                alert("no food");
            });
        }
    },
    mounted() {
        this.loadRest();
        this.getMenu();
    }
}

</script>

<style scoped>
img {
    max-height: 100px;
}
</style>