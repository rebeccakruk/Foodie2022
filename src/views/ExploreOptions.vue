<template>
    <div>

        <nav>
            <router-view />
            <ClientBarCard v-if="userLoggedIn()" />
            <LoginButton v-if="!userLoggedIn()" />
            <RestList />
            <RestLoginButton v-if="!restoLoggedIn()" />
        </nav>
    </div>

</template>

<script>
import LoginButton from "@/components/LoginButton.vue";
import RestList from "@/components/RestList.vue";
import RestLoginButton from "@/components/RestLoginButton.vue";
import ClientBarCard from "@/components/ClientBarCard.vue";
import cookies from 'vue-cookies';


export default {
    name: "ExploreOptions",
    components: {
        LoginButton,
        RestList,
        RestLoginButton,
        ClientBarCard
    },
    methods: {
        userLoggedIn() {
            let client = cookies.get('token')
            if (client == null) {
                return false
            } else {
                return true
            }
        },
        restoLoggedIn() {
            let resto = cookies.get('restToken')
            console.log(resto);
            if (resto == null) {
                return false
            } else {
                return true
            }
        }
    },
    mounted() {
        this.userLoggedIn();
        this.restoLoggedIn()
    },
}



</script>

<style scoped>
.banner {
    height: 25vh;
    width: 90%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}
</style>