<template>
    <div>
        <!-- THIS WILL BE THE MAIN PAGE. A USER WILL GO TO THIS PAGE, THEY CAN LOOK AT MENUS AND RESTAURANTS, BUT IF THEY WISH TO ORDER
        THEY MUST LOGIN OR REGISTER. THIS WILL BE A BAR AT THE TOP OF THE SCREEN AND THE CHOICES BELOW ON THE PAGE -->
        <nav>
            <router-view />
            <div v-if="!isLoggedIn">
                <LoginButton />
            </div>
            <!-- <ClientLogin /> -->
            <div v-else>
                <IsLoggedIn />
            </div>
            <ClientProfile />
            <RestLoginButton />
        </nav>
        <!-- <RestUno /> -->
        <!-- it's either a user or a resto. make sure that one of the cookies is active, or alternativly you have a cookie that says what kind. token has toke, type of user, user id or resto id based on whoever is logged in. 
could do one for session token, user type, just so you choose to assign the properties of the cookie. once that's there, you can have a dual purpose  -->
    </div>
</template>

<script>
import IsLoggedIn from "@/components/IsLoggedIn.vue";
import LoginButton from "@/components/LoginButton.vue";
// import ClientLogin from "@/components/ClientLogin.vue";
import RestLoginButton from "@/components/RestLoginButton.vue";
import ClientProfile from "./ClientProfile.vue";
// import cookies from 'vue-cookies';

// import IsLoggedIn from "@/components/IsLoggedIn.vue";
export default {
    name: "ExploreOptions",
    components: {
        LoginButton,
        RestLoginButton,
        IsLoggedIn,
        // ClientLogin,
        ClientProfile
    },
    data() {
        return {
            isLoggedIn: false
        }
    },
    methods: {
        loggedIn() {
            this.isLoggedIn = !this.isLoggedIn
        }
    },
    mounted() {
        this.$root.$on('isLoggedIn', this.loggedIn)
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