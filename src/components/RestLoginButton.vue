<template>
    <v-footer class="justify-center">
        <v-row aligned="center" justify="space-around">
            <v-btn @click="toRestLogin" text>
                Restaurant Sign In
            </v-btn>
            <v-btn @click="toRestSignup" text color="primary">
                Restaurant Sign Up
            </v-btn>
        </v-row>
    </v-footer>
</template>

<script>
import router from '@/router';
export default {
    name: "RestLoginButton",
    methods: {
        toRestLogin() {
            console.log(`loginbutton to rest login`);
            router.push("/rest-login")
        },
        toRestSignup() {
            console.log(`loginbutton to rest signup`);
            router.push("/rest-signup")
        }
    }
}
</script>

<style scoped>

</style>