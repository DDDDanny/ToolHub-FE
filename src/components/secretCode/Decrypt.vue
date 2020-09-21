<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <!-- 卡片视图 -->
        <v-row>
            <v-col>
                <v-card dark elevation="10" height="400">
                    <v-card-title style="font-size: 15px">
                        <v-icon>mdi-file-lock-outline</v-icon>
                        <span style="margin-left: 10px">待解密文 (CipherText)</span>
                    </v-card-title>
                    <hr>
                    <v-form class="mt-2" :v-model="decryptForm" ref="form">
                        <v-container fluid>
                            <v-radio-group row dark label="解密类型：" v-model="decryptForm.cate">
                                <v-radio label="Base64" value="1"></v-radio>
                            </v-radio-group>
                            <v-col cols="24" md="24">
                                <v-row justify="center">
                                    <v-col cols="12">
                                        <v-textarea label="密文（CipherText）" height="100" no-resize outlined rows="3"
                                                    row-height="10" v-model="decryptForm.waitStr" :rules="waitStrRules" required>
                                        </v-textarea>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="24" md="24">
                                <v-row justify="end">
                                    <v-col cols="12" md="3" align="right">
                                        <v-btn color="blue" class="mr-4" large width="200px" @click="goDecrypt">解密</v-btn>
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
                        <v-icon>mdi-file-key-outline</v-icon>
                        <span style="margin-left: 10px">明文 (PlainText)</span>
                    </v-card-title>
                    <hr>
                    <v-col cols="24" md="20" class="ma-4">
                        <v-row justify="center">
                            <v-col cols="12">
                                <v-textarea label="明文 (PlainText)" height="200" no-resize outlined rows="6" row-height="10" v-model="decryptResult"></v-textarea>
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
                    { text: 'Decrypt', disabled: false }
                ],
                decryptForm: {
                    cate: '1',
                    waitStr: ''
                },
                decryptResult: '',
                waitStrRules: [
                    v => !!v || '密文信息不能为空 (CipherText is required)',
                ],
                decryptFormRef: {}
            }
        },
        methods: {
            async goDecrypt() {
                const jud = this.$refs.form.validate()
                if (!jud) return
                const {data: res} = await this.$http.post('secretCode/goDecrypt', this.decryptForm)
                if (res.meta.status !== 200) {
                    return
                }
                this.decryptResult = res.data.result

            }
        }
    }
</script>

<style scoped>

</style>
