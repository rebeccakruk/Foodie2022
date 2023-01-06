<template>
    <div>

    </div>
</template>

<script>
export default {
    name: "ClientProfile",
    methods: {
        loadClient() {
            console.log('is this loading client');
        }
    },
    mounted() {

        this.$root.$emit('clientToken', this.loadClient())
    },
}
</script>

<style scoped>

</style>