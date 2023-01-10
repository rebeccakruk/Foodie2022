<template>
    <div>
        <v-alert prominent type="error">
            <v-row aligned="center">
                <v-col color="red" class="grow">
                    Are you sure you want to delete your account? All your history will be lost.
                    Press to confirm delete.
                </v-col>
                <v-col class="shrink">
                    <v-btn @click="deleteClient">Delete Account</v-btn>
                </v-col>
            </v-row>
        </v-alert>
    </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
import cookies from 'vue-cookies';

export default {
    name: "DeleteUser",
    methods: {
        deleteClient() {
            let token = cookies.get('token')
            axios.request({
                url: "https://foodierest.ml/api/client",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    "token": token
                },
                method: 'DELETE',
                data: {
                    clientId: null,
                    createdAt: null,
                    email: null,
                    firstName: null,
                    lastName: null,
                    pictureUrl: null,
                    username: null
                }
            }).then((response) => {
                let erase = cookies.remove('token')
                console.log(erase, 'deleting cookies');
                console.log(response);
                if (erase == null) {
                    router.push("/")
                } else {
                    return false
                }
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}

</script>

<style scoped>

</style>