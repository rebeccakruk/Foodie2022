<template>
    <div>
        <MenuCard v-for="item in menu" :key="item.restaurantId" :menuItem="item.name" :price="item.price"
            :imageUrl="item.imageUrl"></MenuCard>
    </div>
</template>

<script>
import MenuCard from '@/components/MenuCard.vue';
import axios from 'axios';
export default {
    name: "ViewMenu",
    components: {
        MenuCard
    },
    data() {
        return {
            menu: []
        }
    },
    methods: {
        getMenu() {
            axios.request({
                url: "https://foodierest.ml/api/menu",
                method: 'GET',
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY,
                },
                params: {
                    description: "",
                }
            }).then((response) => {
                this.menu = response.data
                for (let i = 0; i < this.menu.length; i++)
                    console.log(this.menu);
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.getMenu();
    },
}
</script>

<style scoped>

</style>