<template>
    <div>
        <RestOwnerCard />
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
import RestOwnerCard from '@/components/RestOwnerCard.vue';


export default {
    name: "RestaurantProfile",
    components: {
        RestOwnerCard
    },
    data() {
        return {
            restoGet: []
        };
    },
    methods: {
        loadResto() {
            let restoToken = cookies.get("restToken");
            console.log(restoToken);
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                method: "GET",
                headers: {
                    "x-api-key": process.env.VUE_APP_API_KEY
                },
            }).then((response) => {
                this.restoGet = response.data;
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    mounted() {
        this.loadResto();
    },
}
</script>

<style scoped>

</style>