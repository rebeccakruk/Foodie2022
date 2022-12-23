<template>
    <h1>{{ username }}</h1>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

export default {
    name: "ClientProfile",
    data() {
        return {
            response: [
                {
                    clientId: "",
                    createdAt: "",
                    email: "",
                    firstName: "",
                    lastName: "",
                    pictureUrl: "",
                    username: ""
                }
            ]
        }
    },
    methods: {
        getCookie() {
            cookies.get('token');
            console.log(`what the hell`);
        },
        getProfile() {
            axios.request({
                url: "https://foodierest.ml/api/client",
                method: 'GET',
                header: {
                    "token": "cookies.get('token')",
                    "x-api-key": "lGzWJ81l4YDt4UPA3aOWTjxDZUxZy2eTxrHjoPy9mPfqX",
                },
                data:
                    [
                        {
                            clientId: this.clientId,
                            createdAt: this.createdAt,
                            email: this.email,
                            firstName: this.firstName,
                            lastName: this.lastName,
                            pictureUrl: null,
                            username: this.username
                        }
                    ]
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
            this.$root.$on('isLoggedIn', this.getProfile);
            console.log(this.$cookies.get('token'));
            cookies.get('clientId')
        },
    },
}
</script>

<style scoped>

</style>