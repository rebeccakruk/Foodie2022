<template>
    <div>
        <h1>Restaurant One</h1>
        <button @click="loginRestoOne">Restaurant Access</button>
    </div>
</template>

<script>
import axios from "axios",
axios.defaults.headers.common['x-api-key'] = 'lGzWJ81l4YDt4UPA3aOWTjxDZUxZy2eTxrHjoPy9mPfqX'
export default {
    name: "RestOne",
    methods: {
        loginRestoOne() {
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                method: "GET",
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                console.log(`uh oh.`);
            });
        }
    },
}
</script>

<style scoped>

</style>