<template>
    <div>
        <h2>You must be signed in to order!</h2>
        <v-btn><router-link class="text-decoration-none" :to="'/'">Go Back</router-link></v-btn>
        <MenuCard v-for="(item, index) in menuItems" :key="index" :menuItem="item.name" :menuPrice="item.price"
            :menuDescription="item.description" :imageUrg="item.imageUrl" @buyItem.prevent="message" disabled="disabled"
            class="{disabled:disabled}" />
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
            menuItems: [],
            showMessage: false,
            // item: String,
            // price: String,
            // description: String,
            // restaurantId: Number,
            imageUrl: {
                type: String,
                default: "https://cdn-icons-png.flaticon.com/512/562/562678.png"
            },
        }
    },
    methods: {
        loadItems() {
            axios.request({
                url: "https://foodierest.ml/api/menu",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY
                },
                method: 'GET'
            }).then((response) => {
                this.menuItems = response.data
                console.log(this.menuItems);
            }).catch((error) => {
                console.log(error);
            })
        },
        message() {
            this.showMessage = !this.showMessage
        }
    },
    mounted() {
        this.loadItems();
        this.message();
    },
}
</script>

<style scoped>

</style>