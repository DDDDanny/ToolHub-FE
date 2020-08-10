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
                            <v-text-field label="数据生成数量 (Number)" required v-model="dataNum"></v-text-field>
                        </v-col>
                        <v-col cols="24" md="12">
                            <v-row justify="end" class="mt-2">
                                <v-col cols="12" md="1">
                                    <v-btn dark class="mr-1" color="success" large elevation="12" @click="previewTable">预览</v-btn>
                                </v-col>
                                <v-col cols="12" md="2" class="ml-4">
                                    <v-btn dark class="mr-4" large width="200px" color="blue" elevation="12">导出数据</v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
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
                    phone: false, addr: false
                },
                tableExpData: [{}, {}, {}],
                tableHeader: ['姓名', '性别', '电话', '地址'],
                emptyFlag: false,
                dataNum: ''
            }
        },
        methods: {
            previewTable() {
                this.tableHeader = []
                if (this.checkboxModel.name === true) {
                    this.tableHeader.push('姓名')
                    for (let i = 0; i < this.tableExpData.length; i++ ) this.tableExpData[i].name = '学生' + i
                }
                if (this.checkboxModel.gender === true) {
                    this.tableHeader.push('性别')
                    for (let i = 0; i < this.tableExpData.length; i++ ) this.tableExpData[i].gender = '性别' + i
                }
                if (this.checkboxModel.phone === true) {
                    this.tableHeader.push('电话')
                    for (let i = 0; i < this.tableExpData.length; i++ ) this.tableExpData[i].phone = '电话' + i
                }
                if (this.checkboxModel.addr === true) {
                    this.tableHeader.push('地址')
                    for (let i = 0; i < this.tableExpData.length; i++ ) this.tableExpData[i].addr = '地址' + i
                }
                if (this.tableHeader.length === 0) this.emptyFlag = true
                console.log(this.tableExpData)
            }
        }
    }
</script>

<style scoped>

</style>
