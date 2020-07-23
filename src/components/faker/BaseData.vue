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
                                <v-list-item v-for="{catName, id} in catItems" :key="id">
                                    <v-list-item-content>
                                        <v-list-item-action-text style="font-size: 13px" v-html="catName"></v-list-item-action-text>
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
                result: '这是Faker Data结果信息！'
            }
        },
        created() {
            this.getCategoryList()
        },
        methods: {
            async getCategoryList() {
                const {data: res} = await this.$http.get('/faker/list/base')
                if (res.meta.status !== 200) {
                    return
                }
                this.catItems = res.data
                console.log(this.catItems)
            }
        }
    }
</script>

<style scoped>

</style>
