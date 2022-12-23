<template>
    <div>
        <h2>{{ username }}</h2>
        <v-btn @click="getProfile">Hello, loser!</v-btn>
    </div>
</template>

<script>
import axios from 'axios';

// import cookies from 'vue-cookies';

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
        getProfile() {
            axios.interceptors.request.use(req => {
                req.headers.authorization = `Authorization: localStorage.auth`;
                console.log(`wtffig`);
                return req;
            },
                error => {
                    return Promise.reject(error);
                }),
                axios.request({
                    url: "https://foodierest.ml/api/client",
                    method: 'GET',
                    headers: {
                        // "token": 'Authorization: localStorage.auth}',
                        "x-api-key": "lGzWJ81l4YDt4UPA3aOWTjxDZUxZy2eTxrHjoPy9mPfqX",
                    },
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })
            // this.$root.$on('isLoggedIn', this.getProfile);
            // console.log(this.$cookies.get('token'));
            // cookies.get('clientId')
        },
    },
}

//     }, mounted() {
//         console.log('AuthorizationHeader is:', this.headers.get('Authorization'));
//     },
// }
</script>

<style scoped>

</style>