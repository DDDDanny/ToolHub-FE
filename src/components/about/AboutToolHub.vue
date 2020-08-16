<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <!-- 卡片视图 -->
        <v-card dark elevation="10">
            <v-card-title >Welcome ToolHub</v-card-title>
            <v-card-text>关于ToolHub，最初的想法是，一个练手的项目🙌</v-card-text>
            <v-card-text>然而到现在，我是想做个小型工具库，给大家提供可用性高的工具🤓</v-card-text>
            <v-card-text>目前只有两个工具：数据加密&解密、基于Faker的数据生成及导出（假数据）🎈</v-card-text>
            <v-card-text>希望大家能够给我提出一些建议、意见和需求，也希望能和有兴趣的同学一起合作，共同完成这个项目😋</v-card-text>
            <v-card-text>DDDDanny😎</v-card-text>
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
                    { text: 'AboutToolHub', disabled: false }
                ],
            }
        },
        created() {

        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
