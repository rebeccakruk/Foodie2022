<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-expansion-panels popout>
                    <v-expansion-panel>
                        <v-expansion-panel-header hide actions>
                            <v-row aligned="center" class="spacer" no-gutters>
                                <v-col cols="4" sm="2" md="1">
                                    <v-avatar size="48px">
                                        <div v-if="clientImg">
                                            <img :src="clientImg" height="50px">
                                        </div>
                                        <div v-else>
                                            <v-icon>mdi-account-circle</v-icon>
                                        </div>
                                    </v-avatar>
                                </v-col>

                                <v-col class="hidden-xs-only" sm="5" md="3">
                                    <strong>{{ clientFName }}</strong>
                                </v-col>

                                <v-col class="test-no-wrap" cols="5" sm="3">
                                    Welcome to FOODee!
                                </v-col>
                                <v-col>
                                    maybe put something interesting here ...
                                </v-col>
                            </v-row>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-divider></v-divider>
                            {{ clientFName }}
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
            let userlogout = cookies.remove('token')
            if (userlogout == null) {
                router.push("/")
            } else {
                return false
            }
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