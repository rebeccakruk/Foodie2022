<template>
    <div>
        <v-banner class="banner" color="warning">
            <template v-slot:actions>
                <v-btn @click="navigateToLogin">
                    Sign in
                </v-btn>
                <v-btn @click="navigateToSignup">
                    Sign up
                </v-btn>
                <!-- I want the main explore page to have a bar to sign in. When pressed, you are taken to a login page (new page). from there you will see a sign up button,
     a login button, a change profile button, a restaurant login button. Once successfully logged in, you will be taken back to the main page but without the sign in 
     button showing. From there you can add to cart. -->
            </template>
        </v-banner>
    </div>
</template>

<script>

import router from '@/router';

export default {
    name: "LoginButton",
    methods: {
        navigateToLogin() {
            console.log(`loginbutton to login`);
            router.push("/login")
        },
        navigateToSignup() {
            console.log(`loginbutton to signup`);
            router.push("/signup")
        }
    }
}
</script>

<style scoped>

</style>