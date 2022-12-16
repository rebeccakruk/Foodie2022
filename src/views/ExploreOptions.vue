<template>
    <div>
        <!-- THIS WILL BE THE MAIN PAGE. A USER WILL GO TO THIS PAGE, THEY CAN LOOK AT MENUS AND RESTAURANTS, BUT IF THEY WISH TO ORDER
        THEY MUST LOGIN OR REGISTER. THIS WILL BE A BAR AT THE TOP OF THE SCREEN AND THE CHOICES BELOW ON THE PAGE -->
        <nav>
            <router-view />
            <LoginButton />
        </nav>
        <!-- <RestUno /> -->
        <!-- it's either a user or a resto. make sure that one of the cookies is active, or alternativly you have a cookie that says what kind. token has toke, type of user, user id or resto id based on whoever is logged in. 
could do one for session token, user type, just so you choose to assign the properties of the cookie. once that's there, you can have a dual purpose  -->
    </div>
</template>

<script>
import LoginButton from "@/components/LoginButton.vue";
export default {
    name: "ExploreOptions",
    components: {
        LoginButton
    },
    mounted() {
        console.log(`Explore component (parent-view)`);
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