<template>
    <div>
        <!-- THIS WILL BE THE MAIN PAGE. A USER WILL GO TO THIS PAGE, THEY CAN LOOK AT MENUS AND RESTAURANTS, BUT IF THEY WISH TO ORDER
        THEY MUST LOGIN OR REGISTER. THIS WILL BE A BAR AT THE TOP OF THE SCREEN AND THE CHOICES BELOW ON THE PAGE -->
        <nav>
            <router-view />
            <ClientBarCard v-if="userLoggedIn()" />

            <LoginButton v-if="!userLoggedIn()" />
            <img src="https://i.imgflip.com/2acfpw.jpg">
            <RestList />

            <RestLoginButton />
        </nav>

        <!-- it's either a user or a resto. make sure that one of the cookies is active, or alternativly you have a cookie that says what kind. token has toke, type of user, user id or resto id based on whoever is logged in. 
could do one for session token, user type, just so you choose to assign the properties of the cookie. once that's there, you can have a dual purpose  -->
    </div>
    <!-- dynamic routes - view-router (part of them is a param) a route that will be for a rest page, first page / restaurant, second part / some number. can be assigned to some variable, with a view. that single view will be able to 
    dynamically change based on the paramaterized router link. THE IDEA IN OUR CASE have the static part /restaurant/menu param = when the page loads, you take the param and use it in your axios call
    if we're looking at resto #5 the user ended up on path /restaurant/5, on mounted, it will look at the router, and go with the restaurant id, then direct you to that menu only
    it's late enough in the project where he needs to just guide us through. https://v3.router.vuejs.org/guide/essentials/dynamic-matching.html  -->
    <!-- only work with this working perfectly, with no mistakes. try to figure it out on your own. -->
</template>

<script>
import LoginButton from "@/components/LoginButton.vue";
import RestList from "@/components/RestList.vue";
import RestLoginButton from "@/components/RestLoginButton.vue";
import ClientBarCard from "@/components/ClientBarCard.vue";
import cookies from 'vue-cookies';


export default {
    name: "ExploreOptions",
    components: {
        LoginButton,
        RestList,
        RestLoginButton,
        ClientBarCard
    },
    methods: {
        userLoggedIn() {
            let client = cookies.get('token')
            if (client == null) {
                return false
            } else {
                return true
            }
        },
        restoLoggedIn() {
            let resto = cookies.get('restToken')
            if (resto == null) {
                return false
            } else {
                return true
            }
        }
    }
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