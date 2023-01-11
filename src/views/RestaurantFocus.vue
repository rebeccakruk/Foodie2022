<template>
    <div>
        {{ $route.params.restaurantId }}
        <RestList />
        <RestaurantCard v-for="name in restaurant" :key="name.restaurantId" :restName="name" />
        <MenuCard v-for="(item, index) in menu" :key="index" :menuItem="item.name" :menuPrice="item.price"
            :menuDescription="item.description" :imageUrg="item.imageUrl" @buyItem="shoppingCart" />
    </div>
</template>

<script>
import RestaurantCard from '@/components/RestaurantCard.vue';
import axios from 'axios';
import cookies from 'vue-cookies';
import MenuCard from '@/components/MenuCard.vue';
import RestList from '@/components/RestList.vue';
export default {
    name: "RestaurantFocus",
    components: {
        MenuCard,
        RestaurantCard,
        RestList
    },
    data() {
        return {
            menu: [],
            restaurant: [],
            cart: []
        }
    },
    methods: {
        getMenu() {
            axios.request({
                url: "https://foodierest.ml/api/menu",
                params: {
                    restaurantId: this.$route.params.restaurantId
                },
                method: 'GET',
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                },
            }).then((response) => {
                console.log(response);
                this.menu = response.data;
                // for (let i = 0; i < this.menu.length; i++)
                console.log(this.menu);
            }).catch((error) => {
                console.log(error);
                alert('no food')
            });
        },
        getRestoInfo() {
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                params: {
                    restaurantId: this.$route.params.restaurantId
                },
                method: 'GET',
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                }
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
                alert('no restaurant')
            });
        },
        restoLoggedIn() {
            let resto = cookies.get('restToken')
            console.log(resto);
            if (resto == null) {
                return false
            } else {
                return true
            }
        },
        shoppingCart(item) {
            let order = cookies.set('order')
            this.cart.push(item);
            alert('added to cart')
            console.log(order);
        }
    },
    mounted() {
        this.getMenu();
        this.restoLoggedIn();
        this.$on('buyItem', this.menuRestaurantId, this.menuId)
    }
}

</script>

<style scoped>

</style>