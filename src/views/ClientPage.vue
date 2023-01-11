<template>
    <div>
        <ClientProfile />
        <EditTwo v-if="cookieWho()" />
        <ClientLogin v-if="!cookieWho()" />
    </div>
</template>

<script>
import ClientProfile from '@/components/ClientProfile.vue';
import ClientLogin from '@/components/ClientLogin.vue';
import EditTwo from '@/components/EditTwo.vue';
import cookies from 'vue-cookies';

export default {
    name: "ClientPage",
    components: {
        ClientProfile,
        ClientLogin,
        EditTwo,
    },
    data() {
        return {
            forceReload: 0,
            imageSrc: ""
        }
    },
    methods: {
        cookieWho() {
            let token = cookies.get('token')
            if (token === null) {
                return true
            } else {
                return true
            }
        },
        reload() {
            this.forceReload += 1
            console.log('this thing on?');
        },
        getProfilePic(src) {
            this.imageSrc = src;
        }
    },
    mounted() {
        this.$root.$on('picture', this.getProfilePic)
    },
    // mounted() {
    //     this.cookieWho();
    // },
}
</script>

<style scoped>

</style>