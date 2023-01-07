<template>
    <div>

    </div>
</template>

<script>


export default {
    name: "ClientBarCard",
    props: {
        clientId: String,
        clientCreatedAt: String,
        clientEmail: String,
        clientFName: String,
        clientLName: String,
        clientImg: {
            type: String,
            default: "https://m.media-amazon.com/images/M/MV5BOTkzNDg0ODg4MF5BMl5BanBnXkFtZTYwNDEwOTEz._V1_.jpg"
        },
        clientUsername: String
    },
}

</script>

<style scoped>

</style>