<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <v-card>
            Hello Export Data
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                breadItems: [
                    { text: 'Home', disabled: false, to: '/' },
                    { text: 'FakerData', disabled: false },
                    { text: 'ExportData', disabled: false }
                ],
            }
        },

    }
</script>

<style scoped>

</style>
