<template>
  <div>
    <img class="logo" src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"
      alt="logo" />
    <router-view />
    <HeaderPage />
    <!-- <SetUp /> -->
    <FooterPage />
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "https://foodierest.ml/api/";
axios.defaults.headers.common['Authorization'] = `localStorage.auth`;
import HeaderPage from "@/components/HeaderPage.vue";
// import SetUp from "@/components/SetUp.vue";

import FooterPage from "@/components/FooterPage.vue";
axios.defaults.headers.common['x-api-key'] = 'lGzWJ81l4YDt4UPA3aOWTjxDZUxZy2eTxrHjoPy9mPfqX'

export default {
  name: 'App',
  components: {
    HeaderPage,
    // SetUp,
    FooterPage,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>
.logo {
  height: 20vh;
}
</style>
