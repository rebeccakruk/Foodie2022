<template>
    <div>
        <!-- THIS WILL BE THE MAIN PAGE. A USER WILL GO TO THIS PAGE, THEY CAN LOOK AT MENUS AND RESTAURANTS, BUT IF THEY WISH TO ORDER
        THEY MUST LOGIN OR REGISTER. THIS WILL BE A BAR AT THE TOP OF THE SCREEN AND THE CHOICES BELOW ON THE PAGE -->
        <nav>
            <router-view />
            <LoginButton />
        </nav>
        <!-- <RestUno /> -->

    </div>
</template>

<script>
import LoginButton from "@/components/LoginButton.vue";
export default {
    name: "ExploreOptions",
    components: {
        LoginButton
    },
    mounted() {
        console.log(`Explore component (parent-view)`);
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