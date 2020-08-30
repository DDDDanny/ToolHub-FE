<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <v-row>
            <v-col>
                <v-card dark elevation="10" height="130">
                    <v-row justify="center">
                        <v-col cols="12" md="12" class="ma-6">
                            <v-alert color="blue" dark elevation="12" icon="mdi-gamepad-variant-outline" class="ml-5 mr-5" style="align-items: center;" border="left">
                                说明一下: 这里计算了购买的所有商品以折扣价或直减价进行支付后，每个商品的实付价格。
                            </v-alert>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card dark elevation="10" height="630">
                    <v-stepper v-model="e1" style="height: 100%" dark >
                        <v-stepper-header>
                            <v-stepper-step :complete="e1 > 1" step="1">输入商品总数</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step :complete="e1 > 2" step="2">输入每个商品原价</v-stepper-step>
                            <v-divider></v-divider>
                            <v-stepper-step step="3">输入实际支付总金额</v-stepper-step>
                        </v-stepper-header>
                        <v-stepper-items>
                            <v-stepper-content step="1">
                                <div class="mb-12" style="height: 410px;">
                                    <v-row justify="center">
                                        <v-col cols="12" md="4">
                                            <v-text-field label="商品总数" hint="请输入购买的商品总数" style="margin-top: 150px"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div class="ml-7">
                                    <v-btn color="success" @click="e1 = 2">下一步(Next)</v-btn>
                                </div>
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <v-card class="mb-12" color="grey lighten-1" height="420px"></v-card>
                                <div class="ml-7">
                                    <v-btn color="primary" @click="e1 = 1" class="mr-5">上一步(Back)</v-btn>
                                    <v-btn color="success" @click="e1 = 3">下一步(Next)</v-btn>
                                </div>
                            </v-stepper-content>
                            <v-stepper-content step="3">
                                <div class="mb-12" style="height: 410px;">
                                    <v-row justify="center">
                                        <v-col cols="12" md="4">
                                            <v-text-field label="实际支付金额" hint="请输入购买的所有商品实际支付金额" style="margin-top: 150px"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </div>
                                <div class="ml-7">
                                    <v-btn color="primary" @click="e1 = 2" class="mr-5">上一步(Back)</v-btn>
                                    <v-btn color="success">计算(Calculate)</v-btn>
                                </div>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
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
                    { text: 'Calculate', disabled: false },
                    { text: 'RealPayment', disabled: false }
                ],
                e1: 1
            }
        }
    }
</script>

<style scoped lang="sass">

</style>
