<template>
    <v-sheet :min-height="$vuetify.breakpoint.xs ? 300 : '20vh'" :rounded="$vuetify.breakpoint.xsOnly">
        <v-app>
            <div v-for="rest in restaurants" :key="rest.restaurantId">{{ rest.name }}<router-link
                    class="text-decoration-none" :to="'/restaurant/' + rest.restaurantId">
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
                            </v-row>
                        </v-container>
                    </v-card>
                </router-link>
                <div>
                    <!-- <div>
                        <MenuCard v-for="(item, index) in menu" :key="index" :menuItem="item.name" :price="item.price"
                            :imageUrl="item.imageUrl"><router-link to="/"></router-link></MenuCard> />
                    </div> -->
                    <!-- <v-btn outlined rounded text>
                        Add to Cart
                    </v-btn> -->
                </div>
            </div>
        </v-app>
    </v-sheet>
</template>

<script>
import axios from 'axios';
import router from "@/router";
// import MenuCard from '@/components/MenuCard.vue';
import cookies from 'vue-cookies';


export default {
    name: "RestList",
    components: {
        // ViewMenu,
        // MenuCard
    },
    data() {
        return {
            resto: false,
            restaurants: [],
            menu: [],
            isExploring: false,
            altBanner: {
                type: String,
                url: "https://plus.unsplash.com/premium_photo-1664391902870-6c7ecfd470ca",
            },
            imageUrl: {
                type: String,
                url: "https://plus.unsplash.com/premium_photo-1664391902870-6c7ecfd470ca",
            }
        }
    },
    methods: {
        isLogged() {
            let resto = cookies.get('restToken')
            if (resto == null) {
                router.push('/');
            } else {
                return true
            }
        },
        listOptions() {
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                method: "GET",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                }
            }).then((response) => {
                this.restaurants = response.data
                console.log(this.restaurants);
            }).catch((error) => {
                console.log(error);
            })
        },
        getMenu() {
            axios.request({
                url: "https://foodierest.ml/api/menu",
                method: 'GET',
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                },
                params: {
                    description: "",
                }
            }).then((response) => {
                this.menu = response.data
                console.log(this.menu);
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.isLogged();
        this.listOptions();
        this.getMenu();
    },
}

</script>



<style scoped>

</style>