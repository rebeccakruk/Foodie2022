<template>
    <v-app>

        <v-row justify="center">
            <v-col cols="12" sm="8">
                <v-card>

                    <v-card-title class="orange darken-1">
                        <span class="text-h5 white--text">
                            <div>{{ clientFName }} {{ clientLName }}</div>
                        </span>

                        <v-spacer></v-spacer>

                        <v-btn dark icon><router-link to="/edit"><v-icon>mdi-pencil</v-icon></router-link>

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

                    <img :src="clientImg" height="200px">

                </v-card>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
export default {
    name: "ClientCard",
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
    methods: {
        sharePic() {
            this.$root.$emit('this.clientImg')
        }
    },
}

</script>

<style scoped>

</style>