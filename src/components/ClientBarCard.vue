<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-expansion-panels popout>
                    <v-expansion-panel>
                        <v-expansion-panel-header hide actions>
                            <v-row aligned="center" class="spacer" no-gutters>
                                <v-col cols="4" sm="2" md="1">
                                    <v-avatar color="indigo" size="48px">
                                        <div v-if="(!clientImg)">
                                            <v-icon color="indigo">mdi-account-circle</v-icon>
                                        </div>
                                        <div v-else>
                                            <img :src="clientImg" height="50px" alt="avatar">
                                        </div>
                                    </v-avatar>
                                </v-col>

                                <v-col class="hidden-xs-only" sm="5" md="3">
                                    <v-card-title :elevation="20" text="black"></v-card-title>
                                    <strong>{{ clientFName }}</strong>
                                </v-col>

                                <v-col size="10rem" cols="5" sm="3">
                                    Welcome to FOODee!
                                </v-col>
                                <v-col>

                                </v-col>
                            </v-row>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-divider></v-divider>
                            <v-btn @click="viewHistory">View Order History</v-btn>
                            <v-btn @click="toProfile">View / Edit Profile</v-btn>
                            <v-btn @click="logout">Sign Out</v-btn>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import router from '@/router';
import cookies from 'vue-cookies';
import axios from 'axios';




export default {
    name: "ClientBarCard",
    props: {
        clientId: Number,
        clientCreatedAt: String,
        clientEmail: String,
        clientFName: String,
        clientLName: String,
        clientImg: {
            type: String,
        },
        clientUsername: String
    },
    methods: {
        toProfile() {
            console.log(`edit`);
            router.push("/client");
        },
        logout() {
            let userlogout = cookies.get('token')
            axios.request({
                url: "https://foodierest.ml/api/client-login",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                    "token": userlogout
                },
                method: 'DELETE'
            }).then((response) => {
                let logout = cookies.remove('token')
                console.log(logout, 'deleting cookies');
                console.log(response);
                if (userlogout == null) {
                    router.push("/")
                } else {
                    return false
                }
            }).catch((error) => {
                console.log(error);
            })
        },
        viewHistory() {
            console.log('viewhistory');
            router.push("/")
        }
    },
    mounted() {
        console.log(this.clientFName);
    },
}

</script>

<style scoped>

</style>