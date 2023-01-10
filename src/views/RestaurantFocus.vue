<template>
    <div>
        <!-- <div v-show="getCookie()"> -->
        <h1>hi restaurant!</h1>
        <!-- </div> -->
        {{ $route.params.restaurantId }}
        <!-- <RestaurantCard /> -->
        <p v-for="(item, index) in menu" :key="index">{{ item.name }}</p>
        <h2>{{ item }}</h2>
        <MenuCard />
        <h2>testing testing 1 2 3</h2>
    </div>
</template>

<script>
// import RestaurantCard from '@/components/RestaurantCard.vue';
import axios from 'axios';
import MenuCard from '@/components/MenuCard.vue';
export default {
    name: "RestaurantFocus",
    components: {
        MenuCard,
        // RestaurantCard
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
                params: this.$route.params.restaurantId,
                method: "GET",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                },
            }).then((response) => {
                this.menu = response.data;
                for (let i = 0; i < this.menu.length; i++)
                    console.log(this.menu);
            }).catch((error) => {
                console.log(error);
            });
        },
        getRestoInfo() {
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                params: this.$route.params.restaurantId,
                method: 'GET',
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                }
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        },
        getCookie(restToken) {
            let name = restToken + "=";
            let cookieName = decodeURIComponent(document.cookie)
            let ck = cookieName.split(';');
            for (let i = 0; i < ck.length; i++) {
                let c = ck[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
    },
    mounted() {
        this.getMenu();
        this.getRestoInfo();
        //     this.getCookie();
        //     let restoCookie = this.getCookie('restaurantToken')
        //     if (restoCookie) {
        //         console.log(restoCookie);
        //     }
        // }
    }
}

</script>

<style scoped>

</style>