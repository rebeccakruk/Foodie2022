<template>

    <div>
        <h1>Are you sure you wish to sign out?</h1>
        <v-btn @click="restSignOut" color="red">
            Sign Out
        </v-btn>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
import router from "@/router";


export default {
    name: "RestoSignOut",
    methods: {
        restSignOut() {
            let restLogout = cookies.get('restToken')
            axios.request({
                url: "https://foodierest.ml/api/restaurant-login",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    "token": restLogout
                },
                method: "DELETE",
            }).then((response) => {
                let logout = cookies.remove('restToken')
                console.log(logout, 'Deleting Cookies');
                console.log(response);
                router.push('/rest-admin')
            }).catch((error) => {
                console.log(error);
            })
        }
    },
}
</script>

<style scoped>

</style>