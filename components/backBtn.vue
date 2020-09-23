<template>
    <div class="mt-16" @click="$router.push('/')">
        <v-btn left fixed style="bottom: 65px" fab color="green lighten-1">
            <v-icon color="white">mdi-chevron-left</v-icon>
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "backBtn"
    }
</script>

<style scoped>

</style>