<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <v-container>
            <v-row>
                <v-col cols="6" md="2">
                    <v-card  dark elevation="10" height="750px">

                        <v-card-title style="font-size: 15px">
                            <v-icon>mdi-format-list-bulleted-type</v-icon>
                            <span style="margin-left: 10px">类别 (Category)</span>
                        </v-card-title>
                        <hr>
                        <v-list nav>
                            <v-list-item-group color="primary">
                                <v-list-item v-for="{catName, id} in catItems" :key="id" @click="selectedCat(id)">
                                    <v-list-item-content>
                                        <v-list-item-action-text style="font-size: 15px" v-html="catName"></v-list-item-action-text>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-col>
                <v-col>
                    <v-row no-gutters>
                        <v-col cols="12" md="12">
                            <!-- 卡片视图 -->
                            <v-card dark elevation="10" height="400px">
                                <v-card-title style="font-size: 15px">
                                    <v-icon>mdi-basket-fill</v-icon>
                                    <span style="margin-left: 10px">参数 (Parameters)</span>
                                </v-card-title>
                                <hr>
                                <v-row v-if="selectedCatId === '000'" justify="center" style="margin-top: 80px">
                                    <v-col cols="24" md="8">
                                        <v-row justify="center">
                                            <v-alert color="blue" dark elevation="12" width="470px" icon="mdi-google-downasaur" style="align-items: center" border="left">
                                                <span>请选择左侧类别（Category）</span><br>
                                                <span>温馨提示： 如果输入错误参数，也必将得到错误结果！</span>
                                            </v-alert>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row v-if="selectedCatId === 104 " justify="center" style="margin-top: 100px">
                                    <v-alert color="blue" dark elevation="12" width="450px" icon="mdi-gamepad-variant-outline" style="align-items: center" border="left">
                                        想要更多随机数据，请联系我: 707956456@qq.com
                                    </v-alert>
                                </v-row>
                                <v-form :v-model="nameParamsForm" ref="form" v-else-if="selectedCatId === 100">
                                    <v-container>
                                        <v-row justify="start" class="pa-6">
                                            <v-col cols="12" md="6">
                                                <v-text-field v-model="nameParamsForm.lastName" label="姓氏（Last name）"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-text-field v-model="nameParamsForm.firstName" label="名字（First name）"></v-text-field>
                                            </v-col>
                                            <v-col cols="24" md="12">
                                                <v-row justify="end" class="mt-2">
                                                    <v-col cols="12" md="1">
                                                        <v-btn dark class="mr-1" @click="paramsFormReset" large elevation="12" >重置</v-btn>
                                                    </v-col>
                                                    <v-col cols="12" md="2" class="ml-4">
                                                        <v-btn dark class="mr-4" @click="paramsFormSubmit" large width="200px" color="blue" elevation="12">生成数据</v-btn>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-form>
                                <v-form :v-model="addrParamsForm" ref="form" v-else-if="selectedCatId === 101">
                                    <v-container>
                                        <v-row justify="start" class="pa-6">
                                            <v-col cols="6" md="3">
                                                <v-text-field v-model="addrParamsForm.country" label="国家（Country）"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" md="3">
                                                <v-text-field v-model="addrParamsForm.province" label="省（Province）"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" md="3">
                                                <v-text-field v-model="addrParamsForm.city" label="城市（City）"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" md="3">
                                                <v-text-field v-model="addrParamsForm.district" label="地区（District）"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" md="3">
                                                <v-text-field v-model="addrParamsForm.street" label="街道（Street）"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" md="3">
                                                <v-text-field v-model="addrParamsForm.building" label="建筑（Building）"></v-text-field>
                                            </v-col>
                                            <v-col cols="6" md="3">
                                                <v-text-field v-model="addrParamsForm.postcode" label="邮编（Postcode）"></v-text-field>
                                            </v-col>
                                            <v-col cols="24" md="12">
                                                <v-row justify="end" class="mt-2">
                                                    <v-col cols="12" md="1">
                                                        <v-btn dark class="mr-1" @click="paramsFormReset" large elevation="12" >重置</v-btn>
                                                    </v-col>
                                                    <v-col cols="12" md="2" class="ml-4">
                                                        <v-btn dark class="mr-4" @click="paramsFormSubmit" large width="200px" color="blue" elevation="12">生成数据</v-btn>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-form>
                                <v-form :v-model="phoneParamsForm" ref="form" v-else-if="selectedCatId === 102">
                                    <v-container>
                                        <v-row justify="start" class="pa-6">
                                            <v-col cols="24" md="6">
                                                <v-text-field v-model="phoneParamsForm.prefix" label="手机号前三位（Prefix）"></v-text-field>
                                            </v-col>
                                            <v-col cols="24" md="12">
                                                <v-row justify="end" class="mt-2">
                                                    <v-col cols="12" md="1">
                                                        <v-btn dark class="mr-1" @click="paramsFormReset" large elevation="12" >重置</v-btn>
                                                    </v-col>
                                                    <v-col cols="12" md="2" class="ml-4">
                                                        <v-btn dark class="mr-4" @click="paramsFormSubmit" large width="200px" color="blue" elevation="12">生成数据</v-btn>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-form>
                                <v-form :v-model="dateTimeParamsForm" ref="form" v-else-if="selectedCatId === 103">
                                    <v-container>
                                        <v-row justify="start" class="pa-6">
                                            <v-col cols="8" md="4">
                                                <v-text-field v-model="dateTimeParamsForm.year" label="年（Year）"></v-text-field>
                                            </v-col>
                                            <v-col cols="8" md="4">
                                                <v-text-field v-model="dateTimeParamsForm.month" label="月（Month）"></v-text-field>
                                            </v-col>
                                            <v-col cols="8" md="4">
                                                <v-text-field v-model="dateTimeParamsForm.day" label="日（Day）"></v-text-field>
                                            </v-col>
                                            <v-col cols="8" md="4">
                                                <v-text-field v-model="dateTimeParamsForm.hour" label="小时（Hour）"></v-text-field>
                                            </v-col>
                                            <v-col cols="8" md="4">
                                                <v-text-field v-model="dateTimeParamsForm.minute" label="分钟（Minute）"></v-text-field>
                                            </v-col>
                                            <v-col cols="8" md="4">
                                                <v-text-field v-model="dateTimeParamsForm.seconds" label="秒（Seconds）"></v-text-field>
                                            </v-col>
                                            <v-col cols="24" md="12">
                                                <v-row justify="end" class="mt-2">
                                                    <v-col cols="12" md="1">
                                                        <v-btn dark class="mr-1" @click="paramsFormReset" large elevation="12" >重置</v-btn>
                                                    </v-col>
                                                    <v-col cols="12" md="2" class="ml-4">
                                                        <v-btn dark class="mr-4" @click="paramsFormSubmit" large width="200px" color="blue" elevation="12">生成数据</v-btn>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-form>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row style="margin-top: 20px">
                        <v-col cols="12" md="12">
                            <!-- 卡片视图 -->
                            <v-card dark elevation="10" height="320px">
                                <v-card-title style="font-size: 15px">
                                    <v-icon>mdi-duck</v-icon>
                                    <span style="margin-left: 10px">结果 (Result)</span>
                                </v-card-title>
                                <hr>
                                <v-col cols="12" md="12">
                                    <v-textarea label="Result" auto-grow outlined rows="1" row-height="12" dark solo
                                                height="220px" readonly class="pa-2" :value="result"></v-textarea>
                                </v-col>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                breadItems: [
                    { text: 'Home', disabled: false, to: '/' },
                    { text: 'FakerData', disabled: false },
                    { text: 'GenerateData', disabled: false }
                ],
                catItems: {},
                nameParamsForm: {
                    lastName: '',
                    firstName: ''
                },
                addrParamsForm: {
                    country: '', province: '', city: '',
                    district: '', street: '', building: '',
                    postcode: ''
                },
                phoneParamsForm: {
                    prefix: ''
                },
                dateTimeParamsForm: {
                    year: '', month: '', day: '',
                    hour: '', minute: '', seconds: ''
                },
                result: '这是Faker Data结果信息！',
                selectedCatId: '000',
            }
        },
        created() {
            this.getCategoryList()
        },
        methods: {
            // 获取类别列表
            async getCategoryList() {
                const {data: res} = await this.$http.get('/faker/list/base')
                if (res.meta.status !== 200) {
                    return
                }
                this.catItems = res.data
                console.log(this.catItems)
            },
            // 重置表单
            paramsFormReset() {
                this.$refs.form.reset()
                this.nameParamsForm.firstName = ''
                this.nameParamsForm.lastName = ''
                this.addrParamsForm.country = ''
                this.addrParamsForm.province = ''
                this.addrParamsForm.city = ''
                this.addrParamsForm.district = ''
                this.addrParamsForm.street = ''
                this.addrParamsForm.building = ''
                this.addrParamsForm.postcode = ''
                this.phoneParamsForm.prefix = ''
                this.dateTimeParamsForm.year = ''
                this.dateTimeParamsForm.month = ''
                this.dateTimeParamsForm.day = ''
                this.dateTimeParamsForm.hour = ''
                this.dateTimeParamsForm.minute = ''
                this.dateTimeParamsForm.seconds = ''
            },
            // 获取当前选择类型的ID
            selectedCat(id) {
                this.selectedCatId = id
                this.result = '这是Faker Data结果信息！'
                console.log(this.selectedCatId)
            },
            // 生成数据
            async paramsFormSubmit() {
                let paramsForm
                if (this.selectedCatId === 100) paramsForm = this.nameParamsForm
                else if (this.selectedCatId === 101) paramsForm = this.addrParamsForm
                else if (this.selectedCatId === 102) paramsForm = this.phoneParamsForm
                else if (this.selectedCatId === 103) paramsForm = this.dateTimeParamsForm
                const submitForm = {
                    cat: this.selectedCatId.toString(),
                    attr: paramsForm
                }
                const {data: res} = await this.$http.post('/faker/random', submitForm)
                if (res.meta.status !== 200) {
                    return
                }
                this.result = res.data.result
            }
        }
    }
</script>

<style scoped lang="less">

</style>
