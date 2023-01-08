<template>
    <div>
        <EditTwo />
        <ClientProfile :key="forceReload" />
        <ClientLogin />
        <ClientSignup />
        <DeleteClient />
    </div>
</template>

<script>
import ClientProfile from '@/components/ClientProfile.vue';
import ClientLogin from '@/components/ClientLogin.vue';
import ClientSignup from '@/components/ClientSignup.vue';
import EditTwo from '@/components/EditTwo.vue';
import cookies from 'vue-cookies';

export default {
    name: "ClientPage",
    components: {
        ClientProfile,
        ClientLogin,
        EditTwo,
        ClientSignup
    },
    data() {
        return {
            forceReload: 0
        }
    },
    methods: {
        cookieWho() {
            let cookie = cookies.get('token')
            if (cookies.get('token') === 'true') {
                console.log(cookie, 'true');
            } else {
                console.log('false');
            }
        },
        reload() {
            this.forceReload += 1
            console.log('this thing on?');
        }
    },
    // mounted() {
    //     this.cookieWho();
    // },
}
</script>

<style scoped>

</style>