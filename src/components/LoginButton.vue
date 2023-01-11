<template>
    <div>
        <v-banner class="banner">
            <template v-slot:actions>
                <v-btn @click="navigateMenuAll">
                    See All Menus
                </v-btn>
                <v-btn @click="navigateToLogin">
                    Sign in
                </v-btn>
                <v-btn @click="navigateToSignup">
                    Sign up
                </v-btn>
            </template>
        </v-banner>
        <!-- OR IF THEY'RE LOGGED IN, THEIR USER COMES UP (CLIENT) IS LOGGED IN COMES IN HERE? i think .... -->
        <!-- I want the main explore page to have a bar to sign in. When pressed, you are taken to a login page (new page). from there you will see a sign up button,
a login button, a change profile button, a restaurant login button. Once successfully logged in, you will be taken back to the main page but without the sign in 
button showing. From there you can add to cart. -->
    </div>
</template>

<script>

import router from '@/router';

export default {
    name: "LoginButton",
    methods: {
        navigateToLogin() {
            console.log(`loginbutton to login`);
            router.push("/signIn");
        },
        navigateToSignup() {
            console.log(`loginbutton to signup`);
            router.push("/signup")
        },
        navigateMenuAll() {
            console.log('loginbutton to menu all');
            router.push("/menuAll")
        }
    }
}
</script>

<style scoped>

</style>