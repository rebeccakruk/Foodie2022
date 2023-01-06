<template>
    <div>
        <h2>{{ menuItem }}</h2>
        <h3>{{ menuPrice }}</h3>
        <img :src="imageUrl" />
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
    }
}
</script>

<style scoped>
img {
    height: 15vh;
}
</style>