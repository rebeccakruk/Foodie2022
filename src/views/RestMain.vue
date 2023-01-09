<template>
    <div>
        <h1>Restaurant Main Page</h1>
        <h4>Here we will have orders, menu change options, we can confirm or delete orders here too. Send confirmation
            of receipt to users.</h4>
        <div>
            {{ $route.params.restaurantId }}
        </div>
        <v-row aligned="center" justify="space-around">
            <v-btn>View Orders</v-btn>
            <v-btn color="blue">
                View / Edit Menu
            </v-btn>
            <v-btn color="green">
                Update Profile
            </v-btn>
            <v-btn color="red">
                Sign Out
            </v-btn>
        </v-row>
        <div v-if="restoSignedIn()">
            <RestaurantProfile />
        </div>
        <RestSignup v-if="!restoSignedIn()" />
        <RestaurantEdit />
    </div>
</template>

<script>
import RestaurantProfile from '@/components/RestaurantProfile.vue';
import RestSignup from '@/components/RestSignup.vue';
import RestaurantEdit from '@/components/RestaurantEdit.vue';
import cookies from 'vue-cookies';

export default {
    name: "RestMain",
    components: {
        RestaurantProfile,
        RestSignup,
        RestaurantEdit
    },
    methods: {
        restoSignedIn() {
            let restToken = cookies.get('restToken')
            if (restToken == null) {
                return false
            } else {
                return true
            }
        }
    },
}

</script>

<style scoped>

</style>