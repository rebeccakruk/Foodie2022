<template>
    <section>

        <!-- <div class="rest"> -->
        <h2>Restaurant ID # {{ $route.params.restaurantId }}</h2>
        <p v-for="food in menu" :key="food.restaurantId">{{ food.name }}</p>
        <!-- <RestaurantCard v-for="rest in restaurant" :key="rest.restaurantId" :restName="rest.name"
                :restBio="rest.bio" :src="rest.bannerUrl" :restAddress="rest.address" :restCity="rest.city" />
        </div>
        <div v-for="item in menu" :key="item.restaurantId">{{ item.name }}</div> -->
        <!-- <ViewMenu /> -->

    </section>
</template>

<script>


import axios from 'axios';
// import router from "@/router";


export default {
    name: "RestaurantFocus",
    data() {
        return {
            menu: [],
            restaurant: [],
            cart: []
        };
    },
    methods: {
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
        },
        getRestoInfo() {
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                params: {
                    restaurantId: this.$route.params.restaurantId
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
            });
        }
    },
    // shoppingCart(item) {
    //     let order = cookies.set('order')
    //     this.cart.push(item);
    //     alert('added to cart')
    //     console.log(order);
    // },
    mounted() {
        this.getMenu();
        this.getRestoInfo();
        // this.$on('buyItem', this.menuRestaurantId, this.menuId)
        // this.$on('openMenu')
    },
}

</script>

<style scoped>

</style>