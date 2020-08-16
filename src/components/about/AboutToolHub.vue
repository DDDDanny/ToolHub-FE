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
            <v-card-title>技术栈</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="24" md="1">
                        <v-chip color="success" small>
                            <v-avatar left><v-icon>mdi-vuejs</v-icon></v-avatar>Vue.js
                        </v-chip>
                    </v-col>
                    <v-col cols="24" md="1">
                        <v-chip color="teal" small>
                            <v-avatar left><v-icon>mdi-router-network</v-icon></v-avatar>Vue Router
                        </v-chip>
                    </v-col>
                    <v-col cols="24" md="1" class="ml-8">
                        <v-chip color="info" small>
                            <v-avatar left><v-icon>mdi-vuetify</v-icon></v-avatar>Vuetify
                        </v-chip>
                    </v-col>
                    <v-col cols="24" md="1" class="ml-3">
                        <v-chip color="warning" small>
                            <v-avatar left><v-icon>mdi-language-python</v-icon></v-avatar>Python
                        </v-chip>
                    </v-col>
                    <v-col cols="24" md="1" class="ml-3">
                        <v-chip color="red" small>
                            <v-avatar left><v-icon>mdi-alpha-f-box-outline</v-icon></v-avatar>Flask
                        </v-chip>
                    </v-col>
                </v-row>
            </v-card-text>
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
