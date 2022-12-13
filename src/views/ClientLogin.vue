<template>
    <div>
        <p>client login</p>
        <div class="user">
            <label for="email">email </label>
            <input type="text" placeholder="Enter Username" name="email" required>

            <label for="psw">Password </label>
            <input type="password" placeholder="Enter Password" name="psw" required>
            <button @click="login" type="submit">Login</button>
            <!-- Register -->
            <!-- <input type="text" placeholder="email" name="email" required>
            <input type="text" placeholder="username" name="username" required>
            <input type="text" placeholder="firstName" name="firstName" required>
            <input type="text" placeholder="lastName" name="lastName" required>
            <input type="text" placeholder="password" name="password" required>
            <button @click="login" type="submit">Create profile</button> -->

        </div>
        <div class="errorMessage"></div>
        <div>
            <img src="">
        </div>
    </div>
</template>

<script>
import axios from "axios";
import router from '@/router';
import cookies from 'vue-cookies';
// axios.defaults.headers.common[`x-api-key`] = `lGzWJ81l4YDt4UPA3aOWTjxDZUxZy2eTxrHjoPy9mPfqX`

export default {
    name: "ClientLogin",
    methods: {
        login() {
            axios.request({
                url: `https://foodierest.ml/api/client-login`,
                header: {
                    "x-api-key": "lGzWJ81l4YDt4UPA3aOWTjxDZUxZy2eTxrHjoPy9mPfqX",
                },
                method: `POST`,
                data: {
                    email: `rebecca7@testing.com`,
                    // first_name: "Rebecca",
                    // last_name: "Kruk",
                    // username: "rebeccaK8",
                    password: `password1234`
                    // client_id: 203
                },
            }).then((response) => {
                console.log(response.data.token);
                cookies.set(`loginToken`, response.data.token)
                router.push("/Explore")
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                console.log(`this is really messed up now.`);
            });
        }
    }
}

</script>

<style scoped>
user {
    background-color: beige;
}
</style>