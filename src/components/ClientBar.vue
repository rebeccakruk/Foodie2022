<template>
    <div>
        <v-banner>
            <h1>show banner here when logged in</h1>
            <v-container fluid>
                <v-row justify="center">
                    <v-expansion-panels popout>
                        <v-expansion-panel v-for="info in response" :key="info.clientId" hide-actions>
                            <v-expansion-panel-header>
                                <v-row aligned="center" class="spacer" no-gutters>
                                    <v-col cols="4" sm="2" md="1">
                                        <v-avatar size="66px">
                                            <img v-if="response.pictureUrl" alt="Avatar"
                                                src="https://i.imgflip.com/2acfpw.jpg">
                                        </v-avatar>
                                    </v-col>

                                    <v-col class="hidden-xs-only" sm="5" md="3"> Hello {{ this.firstName }}
                                        <strong v-html="response.firstName"></strong>
                                    </v-col>

                                    <v-col class="text-no-wrap" cols="5" sm="3">
                                        <strong>Welcome to Foodie</strong>
                                        <v-btn>Search</v-btn>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <v-divider></v-divider>
                                <!-- <v-card-text v-text="lorem"></v-card-text> -->
                                <v-row aligned="center" justify="space around">
                                    <v-btn>Order History</v-btn>
                                    <v-btn @click="loadProfile">View/Edit Profile</v-btn>
                                    <v-btn color="red">Delete Profile</v-btn>
                                    <!-- **ALERT HERE** THE DELETE THING @/components/DeleteAccount.vue-->
                                </v-row>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
            </v-container>
        </v-banner>
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';

export default {
    name: "ClientProfile",
    data() {
        return {
            response: []
        }
    },
    methods: {
        getProfile() {
            let clientToken = cookies.get('clientToken')
            console.log(clientToken, 'barpage');
            axios.request({
                url: "https://foodierest.ml/api/client",
                method: 'GET',
                headers: {
                    "token": clientToken,
                },
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
            this.$root.$on('loggedIn', this.getProfile);
            // console.log(this.$cookies.get('token'));
            // cookies.get('clientId')
        },
    },
    mounted() {
        this.getProfile();
    },
}

</script>

<style scoped>

</style>