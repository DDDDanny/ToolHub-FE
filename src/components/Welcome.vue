<template>
    <div>
        <v-row>
            <v-col cols="12" md="4" align="center" v-for="(item, i) in welcomeInfo" :key="i">
                <v-card dark elevation="20" style="margin-top: 30px" height="370px" width="320">
                    <v-img dark src="../static/welcome.jpg" height="200"></v-img>
                    <v-card-text>
                        <v-card-title size="xl">{{ item.Title }}</v-card-title>
                        <hr>
                        <v-card-subtitle style="text-align: left">{{ item.Desc }}</v-card-subtitle>
                    </v-card-text>
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
                        Title: 'FakerData',
                        Desc: '基于Python的Faker库生成随机数据: 基础数据生成及导出'
                    },
                    {
                        Title: 'SecretCode',
                        Desc: '用于处理数据的加密与解密: 支持MD5、hmac、sha1加密和Base64加解密'
                    },
                    {
                        Title: 'Calculate',
                        Desc: '用于计算数据: 支持计算商品在打折后的实付价格'
                    },
                    {
                        Title: 'FormatData',
                        Desc: '用于格式化数据: 支持格式化Json数据'
                    }
                ]
            }
        }
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
