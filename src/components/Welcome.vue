<template>
	<div>
		<v-row class="mb-3">
			<v-col :span="24" md="24">
				<v-card-title class="ml-3" style="font-size: 35px"
					>ToolHub Summary：</v-card-title
				>
			</v-col>
		</v-row>
		<v-row v-for="item in welcomeInfo" :key="item">
			<v-col :span="24" md="24">
				<v-card dark elevation="15" style="height:90px;">
					<v-row>
						<v-col :span="24" :md="1" class="ml-6">
							<img :src="item.ImgPath" style="height: 45%;" />
						</v-col>
						<v-col :span="24" :md="2">
							<v-card-title style="font-size: 25px;">{{
								item.Title
							}}</v-card-title>
						</v-col>
						<v-col :span="24">
							<v-card-title style="size:80px">{{ item.Desc }}</v-card-title>
						</v-col>
					</v-row>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				welcomeInfo: [
					{
						Title: "FakerData",
						Desc: "基于Python Faker库生成随机数据，实现基础数据生成及导出",
						ImgPath: require("../assets/stickers_033.png"),
					},
					{
						Title: "SecretCode",
						Desc:
							"用于处理数据的加密与解密: 支持MD5、hmac、sha1加密和Base64加解密",
						ImgPath: require("../assets/stickers_027.png"),
					},
					{
						Title: "Calculate",
						Desc: "用于计算数据: 支持计算商品在打折后的实付价格",
						ImgPath: require("../assets/stickers_005.png"),
					},
					{
						Title: "FormatData",
						Desc: "用于格式化数据: 支持格式化Json数据",
						ImgPath: require("../assets/stickers_030.png"),
					},
				],
			};
		},
	};
</script>

<style scoped lang="less">
	.more-info {
		font-size: 50px;
		margin-left: 85px;
		position: absolute;
		top: 160px;
	}
</style>
