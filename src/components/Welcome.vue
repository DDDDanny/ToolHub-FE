<template>
    <div>
        <v-row>
            <v-col cols="4" md="3">
                <v-card dark elevation="20" style="margin-top: 30px" height="370px">
                    <v-img dark src="../static/welcome.jpg"></v-img>
                    <v-card-text>
                        <v-card-title size="xl">FakerData</v-card-title>
                        <hr>
                        <v-card-subtitle>基于Python的Faker库生成随机数据 : 基础数据生成及导出</v-card-subtitle>
                    </v-card-text>
                    <v-bottom-navigation dark color="blue" height="50" absolute style="top: 360px">
                        <v-btn value="favorites">
                            <span>Favorites</span>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                    </v-bottom-navigation>
                </v-card>
            </v-col>
            <v-col cols="4" md="3">
                <v-card dark elevation="20" style="margin-top: 30px" height="370px">
                    <v-img dark src="../static/welcome.jpg"></v-img>
                    <v-card-text>
                        <v-card-title size="xl">SecretCode</v-card-title>
                        <hr>
                        <v-card-subtitle>用于处理数据的加密与解密</v-card-subtitle>
                    </v-card-text>
                    <v-bottom-navigation dark color="blue" height="50" absolute style="top: 360px">
                        <v-btn value="favorites">
                            <span>Favorites</span>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                    </v-bottom-navigation>
                </v-card>
            </v-col>
            <v-col cols="4" md="3">
                <v-card dark elevation="20" style="margin-top: 30px" height="410px">
                    <v-card-text class="more-info">More...</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Welcome"
    }
</script>

<style scoped lang="less">
    .more-info {
        font-size: 50px;
        margin-left: 85px;
        position: absolute;
        top: 160px;
    }
</style>
