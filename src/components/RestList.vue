<template>
    <div>
        <h2>put searchbar here</h2>
        <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.restaurantId" :restName="restaurant.name"
            :restBio="restaurant.bio" :restAddress="restaurant.address" :RestBannerUrl="restaurant.bannerUrl"
            :restCity="restaurant.city">
        </RestaurantCard>

    </div>
    <!-- the typical workflow is make an api request, then the result gets stored in a data variable using v-for. look for it in the data in the past examples-->
</template>



<script>
import axios from 'axios';
import RestaurantCard from '@/components/RestaurantCard.vue';
export default {
    name: "RestList",
    components: {
        RestaurantCard
    },
    data() {
        return {
            restaurants: []
        }
    },
    methods: {
        listOptions() {
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                params: {
                    // restaurants: [
                    //     {
                    //         name: this.name,
                    //         address: this.address,
                    //         bannerUrl: this.bannerUrl,
                    //         bio: this.bio,
                    //         city: this.city,
                    //         email: this.email,
                    //         phoneNum: this.phoneNum,
                    //         // profileUrl: this.profileUrl,
                    //         restaurantID: this.restaurantID
                    //     }
                    // ]
                },
                method: "GET",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                }
            }).then((response) => {
                this.restaurants = response.data
                for (let i = 0; i < this.restaurants.length; i++) {
                    console.log(this.restaurants);
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.listOptions();
    },
}
</script>



<style scoped>

</style>