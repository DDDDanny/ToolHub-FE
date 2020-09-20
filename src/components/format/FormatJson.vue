<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <v-card>
            213
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                breadItems: [
                    { text: 'Home', disabled: false, to: '/' },
                    { text: 'Format', disabled: false },
                    { text: 'Format Json', disabled: false }
                ],
            }
        }
    }
</script>

<style scoped>

</style>