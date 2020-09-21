<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <!-- 卡片视图 -->
        <v-card dark elevation="10">
            <v-card-title >Welcome ToolHub</v-card-title>
            <v-card-text>关于ToolHub，最初的想法是，一个练手的项目🙌</v-card-text>
            <v-card-text>然而到现在，我是想做个小型工具库，给大家提供可用性高的工具🤓</v-card-text>
            <v-card-text>数据加密&解密、基于Faker的数据生成及导出（假数据）、计算实付款和格式化Json数据🎈</v-card-text>
            <v-card-text>希望大家能够给我提出一些建议、意见和需求，也希望能和有兴趣的同学一起合作，共同完成这个项目😋</v-card-text>
            <v-card-title>技术栈</v-card-title>
            <v-card-text>
                <div v-for="(item, i) in skillList" :key="i" style="display: inline-block;margin-right: 15px">
                    <v-chip :color="item.color" small>
                        <v-avatar left><v-icon>{{ item.icon }}</v-icon></v-avatar>{{ item.skill }}
                    </v-chip>
                </div>
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
                skillList: [
                    { icon: 'mdi-vuejs', skill: 'Vue.js', color: 'success' },
                    { icon: 'mdi-router-network', skill: 'Vue Router', color: 'teal' },
                    { icon: 'mdi-vuetify', skill: 'Vuetify', color: 'info' },
                    { icon: 'mdi-language-python', skill: 'Python', color: 'warning' },
                    { icon: 'mdi-alpha-f-box-outline', skill: 'Flask', color: 'red' },
                ]
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
