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
                                <v-row v-if="selectedCatId === '000'" justify="center" style="margin-top: 100px">
                                    <v-alert color="warning" dark elevation="12" width="300px" icon="mdi-gamepad-variant-outline" style="align-items: center">
                                        请选择左侧类别（Category）
                                    </v-alert>
                                </v-row>
                                <v-form :v-model="paramsForm" ref="form" v-else>
                                    <v-container>
                                        <v-row justify="center" class="pa-6">
                                            <v-col cols="12" md="6">
                                                <v-text-field v-model="paramsForm.lastName" :counter="10" label="姓氏（Last name）"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" md="6">
                                                <v-text-field v-model="paramsForm.firstName" :counter="10" label="名字（First name）"></v-text-field>
                                            </v-col>
                                        </v-row>
                                        <v-row justify="end" class="create_btn">
                                            <v-col cols="12" md="1">
                                                <v-btn dark class="mr-1" @click="paramsFormReset" large >重置</v-btn>
                                            </v-col>
                                            <v-col cols="12" md="2">
                                                <v-btn dark class="mr-4" @click="paramsFormSubmit" large width="200px" color="blue">生成数据</v-btn>
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
                    { text: 'Base', disabled: false }
                ],
                catItems: {},
                paramsForm: {
                    lastName: '',
                    firstName: ''
                },
                result: '这是Faker Data结果信息！',
                selectedCatId: '000',
            }
        },
        created() {
            this.getCategoryList()
            this.isActive = true
        },
        methods: {
            async getCategoryList() {
                const {data: res} = await this.$http.get('/faker/list/base')
                if (res.meta.status !== 200) {
                    return
                }
                this.catItems = res.data
                console.log(this.catItems)
            },
            paramsFormReset() {
                this.$refs.form.reset()
                this.paramsForm.firstName = ''
                this.paramsForm.lastName = ''
            },
            async paramsFormSubmit() {
                const submitForm = {
                    cat: this.selectedCatId.toString(),
                    attr: this.paramsForm
                }
                const {data: res} = await this.$http.post('/faker/random', submitForm)
                if (res.meta.status !== 200) {
                    return
                }
                this.result = res.data.result
            },
            selectedCat(id) {
                this.selectedCatId = id
                console.log(this.selectedCatId)
            }
        }
    }
</script>

<style scoped lang="less">
    .create_btn{
        padding-top: 100px;
        padding-right: 40px;
    }
</style>
