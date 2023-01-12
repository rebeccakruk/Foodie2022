<template>
    <div>
        <v-sheet :min-height="$vuetify.breakpoint.xs ? 300 : '20vh'" :rounded="$vuetify.breakpoint.xsOnly"></v-sheet>
        <nav>
            <router-view />
            <ClientBarCard v-if="userLoggedIn()" />
            <LoginButton v-if="!userLoggedIn()" />
            <RestLoginButton v-if="!restoLoggedIn()" />
            <RestList />
            <RestoSignOut />
        </nav>
    </div>

</template>

<script>
import LoginButton from "@/components/LoginButton.vue";
import RestList from "@/components/RestList.vue";
import RestLoginButton from "@/components/RestLoginButton.vue";
import ClientBarCard from "@/components/ClientBarCard.vue";
import cookies from 'vue-cookies';
import RestoSignOut from "@/components/RestoSignOut.vue";


export default {
    name: "ExploreOptions",
    components: {
        LoginButton,
        RestList,
        RestLoginButton,
        ClientBarCard,
        RestoSignOut
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