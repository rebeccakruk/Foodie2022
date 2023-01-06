<template>
    <div>
        <ClientBar />
        <ClientLogin />
        <ClientSignup />
        <EditClient />
        <DeleteClient />
    </div>
</template>

<script>
import ClientLogin from '@/components/ClientLogin.vue';
import ClientBar from '@/components/ClientBar.vue';
import ClientSignup from '@/components/ClientSignup.vue';
import cookies from 'vue-cookies';

export default {
    name: "ClientPage",
    components: {
        ClientBar,
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