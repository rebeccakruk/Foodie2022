<template>
    <div>
        <img :src="imageUrl" alt="no picture">
        <div>
            <h2>{{ menuItem }}</h2>
            <p>{{ menuDescription }}</p>
            <p>{{ menuPrice }}</p>
        </div>
        <v-btn @click="addToCart" outlined rounded text>
            Add to Cart
        </v-btn>
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
            default: "https://cdn-icons-png.flaticon.com/512/562/562678.png"
        },
    },
    methods: {
        addToCart() {
            this.$root.$emit('buyItem', this.menuItem)
        }
    }
}
</script>

<style scoped>
img {
    height: 15vh;
}
</style>