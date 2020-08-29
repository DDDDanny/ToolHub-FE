<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <v-card>
            123
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                breadItems: [
                    { text: 'Home', disabled: false, to: '/' },
                    { text: 'Calculate', disabled: false },
                    { text: 'RealPayment', disabled: false }
                ],
            }
        }
    }
</script>

<style scoped lang="sass">

</style>
