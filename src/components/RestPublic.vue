<template>
    <div>
        <h1>{{ restaurantId }}</h1>
    </div>
</template>

<script>
export default {
    name: RestPublic,
    props: {
        restaurantId: Number,
    },
}
</script>

<style scoped>

</style>