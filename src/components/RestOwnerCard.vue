<template>
    <v-card class="mx-auto">
        <v-img :src="restBannerUrl" height="300px" dark>
            <v-row class="fill-height">
                <v-card-title>

                    <v-spacer></v-spacer>

                    <v-btn dark icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-card-title>

                <v-spacer></v-spacer>

                <v-card-title two-line class="white--text pl-12 pt-12">
                    <div class="text-h4 pl-12 pt-12">
                        {{ restName }}
                    </div>
                    <div class="text-h5 pl-7 pt-7">
                        {{ restBio }}
                    </div>
                </v-card-title>
            </v-row>
        </v-img>

        <v-list two-line>
            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="indigo">
                        mdi-phone
                    </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ restPhoneNum }}</v-list-item-title>
                    <v-list-item-subtitle>Phone</v-list-item-subtitle>
                </v-list-item-content>

            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="indigo">
                        mdi-map-marker
                    </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ restAddress }}</v-list-item-title>
                    <v-list-item-subtitle>{{ restCity }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                    <v-icon color="indigo">
                        mdi-email
                    </v-icon>
                </v-list-item-icon>

            </v-list-item>

            <v-divider inset></v-divider>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: "RestOwnerCard",
    props: {
        restName: String,
        restAddress: String,
        restBannerUrl: String,
        restBio: String,
        restCity: String,
        restEmail: String,
        restPhoneNum: String,
        restProfileUrl: String,
        restRestaurantId: Number
    }
}
</script>

<style scoped>

</style>