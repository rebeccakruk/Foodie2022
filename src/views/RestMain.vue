<template>
    <div>
        <h1>Restaurant Main Page</h1>
        <h4>Here we will have orders, menu change options, we can confirm or delete orders here too. Send confirmation
            of receipt to users.</h4>
        <RestaurantCard />
        <MenuCard />
    </div>
</template>

<script>
import MenuCard from '@/components/MenuCard.vue';
import RestaurantCard from '@/components/RestaurantCard.vue';
export default {
    name: "RestMain",
    components: {
        RestaurantCard,
        MenuCard
    }
}
</script>

<style scoped>

</style>