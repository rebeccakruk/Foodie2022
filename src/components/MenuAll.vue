<template>
    <div>
        <h2>You must be signed in to order!</h2>
        <v-btn><router-link class="text-decoration-none" :to="'/'">Go Back</router-link></v-btn>

        <MenuCard v-for="item in menu" :key="item.restaurantId" :menuItem="item.name"
            :menuRestaurantId="item.restaurantId" :price="item.price" :imageUrl="item.imageUrl"></MenuCard>
    </div>
</template>

<script>
import axios from 'axios';
import MenuCard from '@/components/MenuCard.vue';

export default {
    name: "MenuAll",
    components: {
        MenuCard
    },
    data() {
        return {
            menu: [],
            imageUrl: {
                type: String,
                default: "https://cdn-icons-png.flaticon.com/512/562/562678.png"
            },
        }
    }, methods: {
        loadItems() {
            axios.request({
                url: "https://foodierest.ml/api/menu",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY
                },
                method: 'GET'
            }).then((response) => {
                this.menu = response.data
                console.log(this.menu);
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.loadItems();
    },
}
</script>

<style scoped>

</style>