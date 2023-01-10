<template>
    <div>
        <v-btn color="red">
            Sign Out
        </v-btn>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

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
                this.cookies.remove('restToken')
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.restSignOut();
    },
}
</script>

<style scoped>

</style>