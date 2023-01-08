<template>
    <div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "RestaurantProfile",
    components: {
        MenuCard,
    },
    data() {
        return {
            restoGet: []
        };
    },
    methods: {
        loadResto() {
            let restoToken = cookies.get('restToken')
            console.log(restoToken);
            axios.request({
                url: "https://foodierest.ml/api/restaurant",
                method: "GET",
                headers: {
                    "x-api-key": restoToken
                },
            }).then((response) => {
                this.restoGet = response.data;
            }).catch((error) => {
                console.log(error);
            })
        }
    },
    mounted() {
        this.loadResto();
    },
}
</script>

<style scoped>

</style>