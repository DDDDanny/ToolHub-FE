<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-list-group prepend-icon="mdi-alpha-f-box" no-action v-for="item in menuList" :key="item.nodeName">
                    <template v-slot:activator>
                        <v-list-item-title class="title_temp">{{ item.nodeName }}</v-list-item-title>
                    </template>
                    <v-list-item v-for="secondMenu in item.children" :key="secondMenu.nodeName" link :to="secondMenu.path">
                        <v-list-item-title v-text="secondMenu.nodeName"></v-list-item-title>
                        <v-list-item-icon>
                            <v-icon v-text="secondMenu.iconName"></v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>ToolHub</v-toolbar-title>
        </v-app-bar>

        <v-main>
            <!-- 路由占位符 -->
            <router-view></router-view>
        </v-main>

        <v-footer app>
            <span>&copy; {{ new Date().getFullYear() }} By DDDDanny</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data() {
            return {
                drawer: null,
                menuList: [],
            }
        },
        created() {
            this.getMenuList()
            this.$vuetify.theme.dark = true
        },
        methods: {
            async getMenuList() {
                const {data: res} = await this.$http.get('menu')
                if (res.meta.status !== 200) {
                    return
                }
                this.menuList = res.data
                console.log(this.menuList)
            }
        }
    }
</script>

<style lang="less">
    .title_temp{
        font-size: 15px !important;
    }
</style>
