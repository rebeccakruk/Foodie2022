<template>
    <div>
        <v-banner>
            <v-container fluid>
                <v-row justify="center">
                    <h1>banner for logged in client - where to get data from?</h1>
                    <v-expansion-panels popout>
                        <v-expansion-panel v-for="(data, i) in data" :key="i" hide-actions>
                            <v-expansion-panel-header>
                                <v-row aligned="center" class="spacer" no-gutters>
                                    <v-col cols="4" sm="2" md="1">
                                        <v-avatar size="66px">
                                            <img v-if="data.pictureUrl" alt="Avatar"
                                                src="https://i.imgflip.com/2acfpw.jpg">
                                        </v-avatar>
                                    </v-col>

                                    <v-col class="hidden-xs-only" sm="5" md="3"> You are logged in as
                                        <strong v-html="data.firstName"></strong>
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
        <ClientLogin @isLoggedIn="login" />
    </div>
</template>

<script>
// import ClientLogin from '@/components/ClientLogin.vue';
import router from '@/router';

export default {
    name: "IsLoggedIn",
    // components: {
    //     ClientLogin,
    // },
    data() {
        return {
            IsLoggedIn: true
        }
    },
    methods: {
        login() {
            this.$root.$emit('isLoggedIn', this.IsLoggedIn)
            // this.$root.$emit('isLoggedIn')
        },
        loadProfile() {
            router.push("/profile")
            this.$root.$emit('load')
        }
    },
}

</script>

<style scoped>

</style>