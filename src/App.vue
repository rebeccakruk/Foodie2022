<template>
  <div>
    <img class="logo" src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"
      alt="logo" />
    <HeaderPage />
    <router-link to="/">Home</router-link>
    <router-view />
    <FooterPage />
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "https://foodierest.ml/api/";
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage
  },
  mounted() {
    this.$root.$on('restaurantId', this.restId);
  },
}

</script>

<style scoped>
.logo {
  height: 10vh;
}
</style>
