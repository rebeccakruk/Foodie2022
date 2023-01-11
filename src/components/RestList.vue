<template>
    <v-sheet :min-height="$vuetify.breakpoint.xs ? 300 : '20vh'" :rounded="$vuetify.breakpoint.xsOnly">
        <v-app>
            <div v-for="rest in restaurants" :key="rest.restaurantId"><router-link class="text-decoration-none"
                    :to="'/restaurant/' + rest.restaurantId">
                    <v-card class="ma-0 pa-0" no-gutters>
                        <v-container>
                            <v-row dense>
                                <v-img v-if="rest.bannerUrl" class="white--text" height="200px" :src="rest.bannerUrl">
                                    <v-card-title :elevation="10" text="white">{{ rest.name }}</v-card-title>
                                </v-img>

                                <v-card-subtitle class="text-no-wrap">
                                    {{ rest.bio }}
                                </v-card-subtitle>

                                <v-card-text class="text--primary">
                                    <div>{{ rest.address }}</div>

                                    <div>{{ rest.city }}</div>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn color="orange" text>
                                        Explore Menu
                                    </v-btn>
                                </v-card-actions>
                            </v-row>
                        </v-container>
                    </v-card>
                </router-link>
            </div>
        </v-app>
    </v-sheet>
</template>

<script>
import axios from 'axios';
// import RestaurantCard from '@/components/RestaurantCard.vue';
// import RestOwnerCard from '@/components/RestOwnerCard.vue';
export default {
    name: "RestList",
    components: {
        // RestaurantCard,
        // RestOwnerCard
    },
    data() {
        return {
            restaurants: [],
            altBanner: {
                type: String,
                url: "https://plus.unsplash.com/premium_photo-1664391902870-6c7ecfd470ca"
            }
        }
    },
    methods: {
        listOptions() {
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                method: "GET",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                }
            }).then((response) => {
                this.restaurants = response.data
                // for (let i = 0; i < this.restaurants.length; i++)
                console.log(this.restaurants);
                // for (let restaurantId of this.restaurants) {

                // }
                // for (let i = 0; i < this.restaurants.length; i++) {
                //     console.log(this.restaurants);
                // }
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