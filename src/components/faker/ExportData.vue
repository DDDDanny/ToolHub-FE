<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <v-row>
            <v-col cols="12" md="12">
                <v-card dark height="400" elevation="10">
                    <v-card-title style="font-size: 15px">
                        <v-icon>mdi-basket-fill</v-icon>
                        <span style="margin-left: 10px">所需参数 (Parameters)</span>
                    </v-card-title>
                    <hr>
                    <v-form ref="form">
                        <v-row align="center" class="ma-4">
                            <v-col class="d-flex" cols="12" md="2">
                                <v-checkbox label="姓名 (Name)" color="info" v-model="checkboxModel.name"></v-checkbox>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="2">
                                <v-checkbox label="性别 (Gender)" color="info" v-model="checkboxModel.gender"></v-checkbox>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="2">
                                <v-checkbox label="电话 (Phone)" color="info" v-model="checkboxModel.phone"></v-checkbox>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="2">
                                <v-checkbox label="地址 (Address)" color="info" v-model="checkboxModel.addr"></v-checkbox>
                            </v-col>
                            <v-col class="d-flex" cols="12" md="2">更多(More)...</v-col>
                            <v-col class="d-flex" cols="12" md="6">
                                <v-text-field label="数据生成数量 (Quantity)" required v-model="dataNum" :rules="dataNumRules"></v-text-field>
                            </v-col>
                            <v-col cols="24" md="12">
                                <v-row justify="end" class="mt-2">
                                    <v-col cols="12" md="3" align="right">
                                        <v-btn dark class="mr-1" color="success" large elevation="12" @click="previewTable">预览</v-btn>
                                    </v-col>
                                    <v-col cols="12" md="3" class="ml-4">
                                        <v-btn dark class="mr-4" large width="200px" color="blue" elevation="12" @click="exportData">导出数据</v-btn>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
            <v-col cols="12" md="12">
                <v-card dark height="350" elevation="10">
                    <v-card-title style="font-size: 15px">
                        <v-icon>mdi-file-eye-outline</v-icon>
                        <span style="margin-left: 10px">预览 (Preview)</span>
                    </v-card-title>
                    <hr>
                    <v-row v-if="emptyFlag" justify="center" style="margin-top: 100px">
                        <v-alert color="blue" dark elevation="12" width="450px" icon="mdi-google-downasaur" style="align-items: center" border="left">
                            请选择参数后，再进行预览。不选必然为空喽~
                        </v-alert>
                    </v-row>
                    <v-simple-table dark class="ma-4" v-else>
                        <template>
                            <thead>
                                <tr>
                                    <th class="text-left" style="font-size: 18px" v-for="item in this.tableHeader" :key="item">{{ item }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, i) in this.tableExpData" :key="i">
                                    <td v-if="tableHeader.includes('姓名')">{{ item.name }}</td>
                                    <td v-if="tableHeader.includes('性别')">{{ item.gender }}</td>
                                    <td v-if="tableHeader.includes('电话')">{{ item.phone }}</td>
                                    <td v-if="tableHeader.includes('地址')">{{ item.addr }}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
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
                    { text: 'FakerData', disabled: false },
                    { text: 'ExportData', disabled: false }
                ],
                checkboxModel: {
                    name: false, gender: false,
                    phone: false, addr: false,
                },
                // 表格样例数据
                tableExpData: [
                    { name: '学生1', gender: '性别1', phone: '电话1', addr: '地址1' },
                    { name: '学生2', gender: '性别2', phone: '电话2', addr: '地址2' },
                    { name: '学生3', gender: '性别3', phone: '电话3', addr: '地址3' },
                ],
                tableHeader: ['姓名', '性别', '电话', '地址'],
                emptyFlag: true,
                dataNum: '',
                dataNumRules: [
                    v => !!v || '数量不能为空 (Quantity is required)',
                    v => /^[1-9]\d*|0$/.test(v) || '只能输入数字 (Only Enter Numbers)'
                ]
            }
        },
        methods: {
            previewTable() {
                this.tableHeader = []
                if (this.checkboxModel.name === true) this.tableHeader.push('姓名')
                if (this.checkboxModel.gender === true) this.tableHeader.push('性别')
                if (this.checkboxModel.phone === true) this.tableHeader.push('电话')
                if (this.checkboxModel.addr === true) this.tableHeader.push('地址')
                this.emptyFlag = this.tableHeader.length === 0;
            },
            exportData() {
                const jud = this.$refs.form.validate()
                if (!jud) return
                // 请求数据前，先更新一下被选择项
                this.previewTable()
                const {data: res} = this.$http.get('/faker/export',{
                    responseType: 'blob',
                    params: { paramsList: this.tableHeader.toString(), dataNum: this.dataNum }
                }).then((res) => {
                    this.$utils.exportUtils(res,'FakerDataExport.xlsx')
                })
                console.log(res)
            }
        }
    }
</script>

<style scoped>

</style>
