<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <!-- 卡片视图 -->
        <v-card dark elevation="10">
            hello
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                breadItems: [
                    { text: 'Home', disabled: false, to: '/' },
                    { text: 'About', disabled: false },
                    { text: 'AboutMe', disabled: false }
                ],
            }
        },
        created() {

        },
        methods: {

        }
    }
</script>

<style scoped lang="less">

</style>
