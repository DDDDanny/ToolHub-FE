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
                            <v-checkbox label="姓名 (Name)" color="info" value="name"></v-checkbox>
                        </v-col>
                        <v-col class="d-flex" cols="12" md="2">
                            <v-checkbox label="性别 (Gender)" color="info" value="gender"></v-checkbox>
                        </v-col>
                        <v-col class="d-flex" cols="12" md="2">
                            <v-checkbox label="电话 (Phone)" color="info" value="phone"></v-checkbox>
                        </v-col>
                        <v-col class="d-flex" cols="12" md="2">
                            <v-checkbox label="地址 (Address)" color="info" value="address"></v-checkbox>
                        </v-col>
                        <v-col class="d-flex" cols="12" md="2">更多(More)...</v-col>
                        <v-col class="d-flex" cols="12" md="6">
                            <v-text-field label="数据生成数量 (Number)" required></v-text-field>
                        </v-col>
                        <v-col cols="24" md="12">
                            <v-row justify="end" class="mt-2">
                                <v-col cols="12" md="1">
                                    <v-btn dark class="mr-1" color="success" large elevation="12">预览</v-btn>
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
                    <v-simple-table dark class="ma-4">
                        <template v-slot:default>
                            <thead>
                            <tr>
                                <th class="text-left" style="font-size: 18px">姓名</th>
                                <th class="text-left" style="font-size: 18px">年龄</th>
                                <th class="text-left" style="font-size: 18px">地址</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>张三</td>
                                    <td>12</td>
                                    <td>成都市高新区</td>
                                </tr>
                                <tr>
                                    <td>李四</td>
                                    <td>18</td>
                                    <td>成都市天府新区</td>
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
                items: ['']
            }
        },

    }
</script>

<style scoped>

</style>
