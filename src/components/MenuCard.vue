<template>
    <div>
        <v-app id="inspire">
            <v-card class="mx-auto" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-list-item-title class="font-weight-bold" color="black">
                            {{ menuItem }}
                        </v-list-item-title>
                        <v-list-item-subtitle>{{ menuDescription }}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-img :src="imageUrl" max-width="36px" max-height="36px"></v-img>
                </v-list-item>

                <div class="text-overline mb-4">
                    {{ menuPrice }}
                </div>
                <v-card-actions>
                    <div v-show="checkLogin()">
                        <v-btn @click="checkLogin" outlined rounded text>
                            Add to Cart
                        </v-btn>
                    </div>
                    <div v-show="!checkLogin()">
                        <v-btn @click="goBack" outlined rounded text>
                            Sign In To Order
                        </v-btn>
                    </div>
                </v-card-actions>
            </v-card>
        </v-app>
    </div>
</template>

<script>
export default {
    name: "MenuCard",
    props: {
        menuItem: String,
        menuPrice: String,
        menuDescription: String,
        menuRestaurantId: Number,
        imageUrl: {
            type: String,
            default: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578"
        }
    },
    methods: {
        checkLogin() {
            let check = this.cookies.get('clientToken')
            if (check == null) {
                return false
            } else {
                return true
            }
        }
    }
}
</script>

<style scoped>
img {
    height: 15vh;
}
</style>