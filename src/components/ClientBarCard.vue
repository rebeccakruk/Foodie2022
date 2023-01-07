<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-expansion-panels popout>
                    <v-expansion-panel>
                        <v-expansion-panel-header hide actions>
                            <v-row aligned="center" class="spacer" no-gutters>
                                <v-col cols="4" sm="2" md="1">
                                    <v-avatar size="36px">
                                        <img :src="clientImg">
                                        <v-icon></v-icon>
                                    </v-avatar>
                                </v-col>

                                <v-col class="hidden-xs-only" sm="5" md="3">
                                    {{ clientFName }} {{ clientLName }}
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
                            <v-btn @click="viewHistory">View Order History</v-btn>
                            <v-btn @click="edit">View / Edit Profile</v-btn>
                            <v-btn @click="changePassword">Change Password</v-btn>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-row>
        </v-container>
    </div>
</template>

<script>


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
            default: "https://m.media-amazon.com/images/M/MV5BOTkzNDg0ODg4MF5BMl5BanBnXkFtZTYwNDEwOTEz._V1_.jpg"
        },
        clientUsername: String
    },
}

</script>

<style scoped>

</style>