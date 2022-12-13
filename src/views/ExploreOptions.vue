<template>
    <div>
        <!-- THIS WILL BE THE MAIN PAGE. A USER WILL GO TO THIS PAGE, THEY CAN LOOK AT MENUS AND RESTAURANTS, BUT IF THEY WISH TO ORDER
        THEY MUST LOGIN OR REGISTER. THIS WILL BE A BAR AT THE TOP OF THE SCREEN AND THE CHOICES BELOW ON THE PAGE -->
        <h2>Found just what you're craving?</h2>
        <v-banner class="banner" lines="three"
            icon="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"
            color="warning">
            <template v-slot:actions>
                <v-btn @click="loginPage()">
                    Sign In
                </v-btn>

                <v-btn @click="loginPage()">
                    Sign Up
                </v-btn>
            </template>
        </v-banner>
        <ClientLogin />
    </div>
</template>

<script>
// import axios from "axios";
import router from '@/router';
import ClientLogin from "@/views/ClientLogin.vue";
export default {
    name: "ExploreOptions",
    components: {
        ClientLogin
    },
    data: () => ({
        sticky: false,
    }),
    methods: {
        loginPage() {
            router.push("/client")
        }
    },
}
</script>

<style scoped>
.banner {
    height: 25vh;
    width: 90%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>