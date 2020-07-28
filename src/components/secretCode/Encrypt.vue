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
