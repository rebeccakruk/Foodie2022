<template>
    <div>
        <v-text-field v-model="email"></v-text-field>
        <v-text-field v-model="password"></v-text-field>
        <v-btn @click="apiCall">TEST API</v-btn>
        <v-btn @click="loggin">Loggin</v-btn>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SetUp",
    data() {
        return {
            apiKey: process.env.VUE_APP_API_KEY,
            apiUrl: process.env.VUE_APP_API_URL,
            username: "",
            password: ""
        }
    },
    methods: {
        apiCall() {
            //axios call
            console.log(this.apiKey);
            console.log(this.apiUrl + "client");
            console.log(this.username);
        },
        loggin() {
            axios.request({
                url: "https://reqres.in/api/login",
                data: {
                    email: this.email,
                    password: this.password
                }
            })
        }
    },
}
</script>

<style scoped>

</style>