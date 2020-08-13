<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <!-- 卡片视图 -->
        <v-row justify="center">
            <v-card dark elevation="8" height="250" width="250" class="avatar-img" style="border-radius: 50%;top: 80px;z-index: 1;border: 5px solid #eee;">
                <v-img dark src="../../static/avatar.png" style="width: 100%;height: 100%;border-radius: 50%;"></v-img>
            </v-card>
        </v-row>
        <v-row justify="center">
            <v-card dark elevation="10" height="500" width="1000" style="top: -50px;"></v-card>
        </v-row>
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
