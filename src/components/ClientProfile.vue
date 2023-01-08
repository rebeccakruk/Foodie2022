<template>
    <div>
        <ClientBarCard v-for="customer in clientGet" :key="customer.email" :clientImg="customer.pictureUrl"
            :clientFName="customer.firstName" :clientLName="customer.lastName" />

        <ClientCard v-for="user in clientGet" :key="user.email" :clientId="user.clientId"
            :clientCreatedAt="user.createdAt" :clientFName="user.firstName" :clientLName="user.lastName"
            :clientUsername="user.username" :clientImg="user.pictureUrl" :clientEmail="user.email" />
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
import ClientBarCard from '@/components/ClientBarCard.vue';
import ClientCard from '@/components/ClientCard.vue';

export default {
    name: "ClientProfile",
    components: {
        ClientBarCard,
        ClientCard
    },
    data() {
        return {
            clientGet: []
        };
    },
    methods: {
        loadClient() {
            let clientToken = cookies.get("token");
            console.log(clientToken, "barpage");
            axios.request({
                url: "https://foodierest.ml/api/client",
                method: "GET",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    "token": clientToken,
                },
                // params:
                //     [
                //         {
                //             "clientId": 5,
                //             "createdAt": "2022-04-22",
                //             "email": "wolverine@xmen.com",
                //             "firstName": "Logan",
                //             "lastName": "Logan",
                //             "pictureUrl": null,
                //             "username": "coolguy"
                //         }
                //     ],
            }).then((response) => {
                this.clientGet = response.data;
                for (let i = 0; i < this.clientGet.length; i++)
                    console.log(response);
            }).catch((error) => {
                console.log(error);
            });
            console.log("is this loading client");
        }
    },
    mounted() {
        this.loadClient();
    },
}
</script>

<style scoped>

</style>