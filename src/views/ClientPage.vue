<template>
    <div>
        <ClientProfile />
        <ClientLogin />
        <ClientSignup />
        <EditClient />
        <DeleteClient />
    </div>
</template>

<script>
import ClientProfile from '@/components/ClientProfile.vue';
import ClientLogin from '@/components/ClientLogin.vue';
import ClientSignup from '@/components/ClientSignup.vue';
import cookies from 'vue-cookies';

export default {
    name: "ClientPage",
    components: {
        ClientProfile,
        ClientLogin,
        ClientSignup
    },
    data() {
        return {
            hasToken: false
        }
    },
    methods: {
        cookieWho() {
            let cookie = cookies.get('clientToken')
            if (cookies.get('clientToken') === 'true') {
                console.log(cookie, 'true');
            } else {
                console.log('false');
            }
        }
    },
    mounted() {
        this.cookieWho();
    },
}
</script>

<style scoped>

</style>