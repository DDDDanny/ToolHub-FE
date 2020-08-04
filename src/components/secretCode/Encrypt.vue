<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <!-- 卡片视图 -->
        <v-row>
            <v-col>
                <v-card dark elevation="10" height="400">
                    <v-card-title style="font-size: 15px">
                        <v-icon>mdi-file-key-outline</v-icon>
                        <span style="margin-left: 10px">待加密文 (PlainText)</span>
                    </v-card-title>
                    <hr>
                    <v-form class="mt-1" :v-model="encryptForm" ref="form">
                        <v-container fluid>
                            <v-row justify="start">
                                <v-col cols="8" md="4">
                                    <v-radio-group row dark label="加密类型：" v-model="encryptForm.cate">
                                        <v-radio label="Base64" value="1"></v-radio>
                                        <v-radio label="MD5" value="2"></v-radio>
                                        <v-radio label="hmac" value="3"></v-radio>
                                        <v-radio label="sha1" value="4"></v-radio>
                                    </v-radio-group>
                                </v-col>
                                <v-col cols="16" md="8">
                                    <v-row justify="center" class="mr-1">
                                        <v-textarea dark label="盐（Salt）" no-resize outlined rows="1" row-height="10"
                                                    v-model="encryptForm.salt" v-if="encryptForm.cate === '1'">
                                        </v-textarea>
                                        <v-textarea dark label="盐（Salt）" no-resize outlined rows="1" row-height="10"
                                                    v-model="encryptForm.salt" :rules="saltRule" v-else>
                                        </v-textarea>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-col cols="24" md="24">
                                <v-row justify="center" class="mr-1 ml-1">
                                    <v-textarea label="明文（PlainText）" height="100" no-resize outlined rows="3"
                                                row-height="10" v-model="encryptForm.waitStr" :rules="waitStrRule">
                                    </v-textarea>
                                </v-row>
                            </v-col>
                            <v-col cols="24" md="24">
                                <v-row justify="end">
                                    <v-col cols="12" md="2">
                                        <v-btn color="blue" class="mr-4" large width="200px" @click="goEncrypt">加密</v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-container>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card dark elevation="10" height="350">
                    <v-card-title style="font-size: 15px">
                        <v-icon>mdi-file-lock-outline</v-icon>
                        <span style="margin-left: 10px">密文 (CipherText)</span>
                    </v-card-title>
                    <hr>
                    <v-col cols="24" md="20" class="ma-4">
                        <v-row justify="center">
                            <v-col cols="12">
                                <v-textarea label="密文（CipherText）" height="200" no-resize outlined rows="6" row-height="10" v-model="encryptResult"></v-textarea>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                breadItems: [
                    { text: 'Home', disabled: false, to: '/' },
                    { text: 'SecretCode', disabled: false },
                    { text: 'Encrypt', disabled: false }
                ],
                encryptForm: {
                    cate: '1',
                    salt: '',
                    waitStr: ''
                },
                encryptResult: '',
                saltRule: [
                    v => !!v || '加密盐不能为空 (Salt is required)',
                ],
                waitStrRule: [
                    v => !!v || '明文不能为空 (PlainText is required)',
                ]
            }
        },
        methods: {
            async goEncrypt() {
                const jud = this.$refs.form.validate()
                if (!jud) return
                const {data: res} = await this.$http.post('secretCode/goEncrypt', this.encryptForm)
                if (res.meta.status !== 200) {
                    return
                }
                this.encryptResult = res.data.result
            }
        }
    }
</script>

<style scoped>

</style>
