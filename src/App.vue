<template>
  <div>
    <img class="logo" src="https://www.shutterstock.com/image-vector/food-logo-smile-label-company-260nw-1271590297.jpg"
      alt="logo" />
    <HeaderPage />
    <FooterPage />
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
axios.defaults.headers.common['x-api-key'] = 'lGzWJ81l4YDt4UPA3aOWTjxDZUxZy2eTxrHjoPy9mPfqX'

export default {
  name: 'App',
  components: {
    HeaderPage,

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
