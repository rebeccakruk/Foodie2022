<template>
  <div>
    <HeaderPage />
    <ExploreOptions />
    <FooterPage />
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import axios from "axios";
import ExploreOptions from "@/views/ExploreOptions.vue";
import FooterPage from "@/components/FooterPage.vue";
axios.defaults.headers.common['x-api-key'] = 'lGzWJ81l4YDt4UPA3aOWTjxDZUxZy2eTxrHjoPy9mPfqX'

export default {
  name: 'App',
  components: {
    HeaderPage,
    ExploreOptions,
    FooterPage,
  },
  data: () => ({
    //
  }),
};
</script>
