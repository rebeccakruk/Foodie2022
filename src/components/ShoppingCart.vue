<template>
    <div>
        <h2>SHOPPING CART</h2>
        <h3>{{ order }}</h3>
    </div>
</template>

<script>
import cookies from 'vue-cookies';
export default {
    name: "ShoppingCart",
    methods: {
        getOrder() {
            let added = cookies.get('order')
            for (cartAdd of added)
                console.log(added);
        }
    },
    mounted() {
        this.getOrder();
    },
}
</script>

<style scoped>

</style>