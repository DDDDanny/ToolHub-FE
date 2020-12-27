<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app clipped>
			<v-list rounded>
				<v-list-item link to="/welcome">
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title class="">Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-group
					:prepend-icon="iconName"
					no-action
					v-for="{ children, iconName, nodeName } in menuList"
					:key="nodeName"
				>
					<template v-slot:activator>
						<v-list-item-title class="">{{ nodeName }}</v-list-item-title>
					</template>
					<v-list-item
						v-for="{ iconName, nodeName, path } in children"
						:key="nodeName"
						link
						:to="path"
					>
						<v-list-item-title v-text="nodeName" class="title_temp"></v-list-item-title>
						<v-list-item-icon>
							<v-icon v-text="iconName"></v-icon>
						</v-list-item-icon>
					</v-list-item>
				</v-list-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app clipped-left>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<!-- <img src="../assets/logo.png" style="width: 90px; margin-left: 25px;"/> -->
			<v-toolbar-title>ToolHub</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<!-- 路由占位符 -->
			<router-view></router-view>
		</v-main>

		<v-footer app>
			<span style="font-size: x-small"
				>&copy; {{ new Date().getFullYear() }} By DDDDanny
				<v-icon size="large">mdi-zodiac-aquarius</v-icon>
			</span>
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
			};
		},
		created() {
			this.getMenuList();
			this.$vuetify.theme.dark = true;
		},
		methods: {
			async getMenuList() {
				const { data: res } = await this.$http.get("menu");
				if (res.meta.status !== 200) {
					return;
				}
				this.menuList = res.data;
				console.log(this.menuList);
			},
		},
	};
</script>

<style lang="less">
	.title_temp {
		font-size: 14px !important;
	}
</style>
