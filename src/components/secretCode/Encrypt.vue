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
                    <v-form class="mt-2">
                        <v-container fluid>
                            <v-radio-group row dark label="加密类型：">
                                <v-radio label="Base64" value="radio-1"></v-radio>
                                <v-radio label="MD5" value="radio-2"></v-radio>
                            </v-radio-group>
                            <v-col cols="24" md="24">
                                <v-row justify="center">
                                    <v-col cols="12">
                                        <v-textarea label="明文（PlainText）" height="100" no-resize outlined rows="3" row-height="10"></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="24" md="24">
                                <v-row justify="end">
                                    <v-col cols="12" md="2">
                                        <v-btn color="blue" class="mr-4" large width="200px">加密</v-btn>
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
                                <v-textarea label="密文（CipherText）" height="200" no-resize outlined rows="6" row-height="10"></v-textarea>
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
            }
        }
    }
</script>

<style scoped>

</style>
