<template>
    <v-app id="inspire">
        <v-card class="mx-auto" max-width="400">
            <v-img @click="openMenu" class="white--text align-end" height="200px" :src="RestBannerUrl">
                <v-card-title @click="openMenu">{{ restName }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
                {{ restBio }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
                <div>{{ restAddress }}</div>

                <div>{{ restCity }}</div>
            </v-card-text>

            <v-card-actions>
                <v-btn color="orange" text>
                    Orders
                </v-btn>

                <v-btn color="orange" text>
                    <router-link to="/menu">Explore Menu</router-link>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<script>
import router from '@/router';
export default {
    name: "RestaurantCard",
    props: {
        restName: String,
        restAddress: String,
        RestBannerUrl: {
            type: String,
            default: "https://plus.unsplash.com/premium_photo-1664391902870-6c7ecfd470ca"
        },
        restBio: String,
        restCity: String,
        RestEmail: String,
        RestPhoneNum: String,
        RestRestaurantID: Number
    },
    methods: {
        openMenu() {
            router.push("/menu")
        }
    },
}

</script>

<style scoped>

</style>