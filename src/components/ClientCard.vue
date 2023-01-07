<template>
    <v-app>

        <v-row justify="center">
            <v-col cols="12" sm="8">

                <!-- <v-btn @click="loadClient">Load</v-btn> -->
                <v-card>

                    <v-card-title class="orange darken-1">
                        <span class="text-h5 white--text">
                            <div>{{ clientFName }} {{ clientLName }}</div>
                        </span>

                        <v-spacer></v-spacer>

                        <v-btn dark icon>
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>

                    </v-card-title>

                    <v-list>
                        <v-list-item>
                            <v-list-item-action>
                                <v-icon>mdi-account</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Username: {{ clientUsername }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider inset></v-divider>

                        <v-list-item>
                            <v-list-item-action>
                                <v-icon>mdi-camera</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Profile Picture Link:{{ clientImg }}</v-list-item-title>
                            </v-list-item-content>

                        </v-list-item>

                        <v-divider inset></v-divider>
                        <v-list-item>
                            <v-list-item-action>
                                <v-icon>mdi-name</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>First Name: {{ clientFName }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider inset></v-divider>
                        <v-list-item>
                            <v-list-item-action>
                                <v-icon>mdi-name</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Last Name: {{ clientLName }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider inset></v-divider>

                        <v-list-item>
                            <v-list-item-action>
                                <v-icon>mdi-email</v-icon>
                            </v-list-item-action>

                            <v-list-item-content>
                                <v-list-item-title>Email: {{ clientEmail }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-divider inset></v-divider>

                    </v-list>

                    <v-img :src="clientImg" height="200px"></v-img>

                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
export default {
    name: "ClientCard",
    props: {
        clientId: String,
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