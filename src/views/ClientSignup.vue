<template>
    <div>
        <v-app>
            <v-main>
                <v-container class="fill-height" fluid>
                    <v-row alignment="center" justify="center" dense>
                        <v-col cols="12" sm="8" md="4" lg="4">
                            <v-card elevation="0">
                                <v-img
                                    src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"
                                    alt="logo" contain height="222">
                                </v-img>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field label="email" name="Email" prepend-inner-icon="mdi-mail"
                                            type="email" class="rounded-0" outlined></v-text-field>
                                        <v-text-field label="username" name="username" type="text" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field label="lastName" name="Last Name" type="text" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field label="firstName" name="First Name" type="text" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field label="password" name="password" type="password" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-text-field label="avatar" name="picture (optional)"
                                            prepend-inner-icon="mdi-user" type="img" class="rounded-0"
                                            outlined></v-text-field>
                                        <v-btn @click="login" type="submit" class="rounded-0" color="#000000" x-large
                                            block dark>Login</v-btn>
                                        <v-card-actions class="text--secondary">
                                            <v-checkbox color="#000000" label="Remember Me"></v-checkbox>
                                            <v-spacer></v-spacer>
                                            <!-- <RouterLink :to="{ name: 'SignUp' }">Sign Up</RouterLink> -->
                                            No account? <a href="/" class="pl-2" style="color: #000000">Sign Up</a>
                                        </v-card-actions>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-app>
    </div>
</template>

<script>
export default {
    name: "ClientSignup"
}
</script>

<style scoped>

</style>