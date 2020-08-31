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
                    <v-stepper v-model="initStep" style="height: 100%" dark >
                        <v-stepper-header>
                            <template v-for="(item, i) in stepObj.stepData">
                                <v-stepper-step :complete="initStep > item.stepIndex"
                                                :step="item.stepIndex" :key="item.stepIndex">{{ item.stepDesc }}</v-stepper-step>
                                <v-divider v-if="stepObj.stepData.length !== item.stepIndex" :key="i+6"></v-divider>
                            </template>
                        </v-stepper-header>
                        <v-stepper-items>
                            <v-form ref="form">
                                <v-stepper-content v-for="(item) in stepObj.stepData" :key="item.stepIndex" :step="item.stepIndex">
                                        <div v-if="item.stepIndex === 1">
                                                <div class="mb-12" style="height: 410px;">
                                                    <v-row justify="center">
                                                        <v-col cols="12" md="4">
                                                            <v-text-field v-model="goodsTotal" label="商品总数" hint="请输入购买的商品总数"
                                                                          style="margin-top: 150px" :rules="goodsTotalRules"></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </div>
                                                <div class="ml-7">
                                                    <v-btn color="success" @click="nextStep(item.stepIndex)">下一步(Next)</v-btn>
                                                </div>
                                        </div>
                                        <div v-else-if="item.stepIndex === 2">
                                            <div class="mb-12" style="height: 410px;">
                                                <v-row class="ml-8">
                                                    <v-col v-for="(sign, i) in goodsUnitPrice" :key="i" cols="12" md="2" class="mb-3 mr-12">
                                                        <v-text-field v-model="sign.goodsPrice" :label="`第${sign.id}个商品的原价`"
                                                                      hint="请输入购买的商品原价" :rules="goodsUnitPriceRules"></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </div>
                                            <div class="ml-7">
                                                <v-btn color="primary" @click="backStep(item.stepIndex)" class="mr-5">上一步(Back)</v-btn>
                                                <v-btn color="success" @click="nextStep(item.stepIndex)">下一步(Next)</v-btn>
                                            </div>
                                        </div>
                                        <div v-else-if="item.stepIndex === 3">
                                            <div class="mb-12" style="height: 410px;">
                                                <v-row justify="center">
                                                    <v-col cols="12" md="4">
                                                        <v-text-field v-model="originalPrice" label="实际支付金额" hint="请输入购买的所有商品实际支付金额" style="margin-top: 150px"></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </div>
                                            <div class="ml-7">
                                                <v-btn color="primary" @click="backStep(item.stepIndex)" class="mr-5">上一步(Back)</v-btn>
                                                <v-btn color="success">计算(Calculate)</v-btn>
                                            </div>
                                        </div>
                                </v-stepper-content>
                            </v-form>
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
                initStep: 1,
                stepObj: {
                    stepData: [
                        { stepIndex: 1, stepDesc: '输入商品总数'},
                        { stepIndex: 2, stepDesc: '输入每个商品原价'},
                        { stepIndex: 3, stepDesc: '输入实际支付总金额'},
                    ]
                },
                // 总数量
                goodsTotal: '',
                // 商品单价数组
                goodsUnitPrice: [],
                // 总原价
                originalPrice: '',
                goodsTotalRules: [
                    v => !!v || '商品数量不能为空 (GoodsTotal is required)',
                    v => /^[1-9]\d*$/.test(v) || '商品数量只能输入大于0的整数 (Enter an integer greater than 0)',
                    v => v <= 15 || '商品数量最多15个 (Up to 15)',
                ],
                goodsUnitPriceRules: [
                    v => !!v || '商品价格不能为空 (GoodsTotal is required)',
                    v => /^[0-9]+(.[0-9]{1,2})?$/.test(v) || '商品价格只能输入最多两位小数 (Enter up to two decimal places)',
                ]
            }
        },
        created() {
            // console.log(this.stepObj.stepData.length)
        },
        methods: {
            // 下一步的跳转方法
            nextStep(stepIndex) {
                // 数据校验
                const jud = this.$refs.form.validate()
                if (!jud) return
                // 清除旧的数据校验结果
                this.$refs.form.resetValidation()
                if (stepIndex === 1) {
                    if (this.goodsUnitPrice.length !== parseInt(this.goodsTotal))
                        this.getGoodsUnitPrice()
                    this.initStep = 2
                }
                else if (stepIndex === 2) {
                    console.log(this.goodsUnitPrice)
                    this.initStep = 3
                }
            },
            // 上一步的跳转方法
            backStep(stepIndex) {
                if (stepIndex === 2) {
                    // 数据校验
                    const jud = this.$refs.form.validate()
                    if (!jud) {
                        // 如果数据校验不通过，清除数据，并重置校验结果
                        this.$refs.form.resetValidation()
                        this.goodsUnitPrice = []
                    }
                    this.initStep = 1
                }
                else if (stepIndex === 3) this.initStep = 2
            },
            // 获取每个商品原价
            getGoodsUnitPrice() {
                this.goodsUnitPrice = []
                for (let i = 1; i <= parseInt(this.goodsTotal); i++ ) {
                    this.goodsUnitPrice.push({ id: i, goodsPrice: ''})
                }
            }
        }
    }
</script>

<style scoped lang="sass">

</style>
