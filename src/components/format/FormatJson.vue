<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <v-row>
            <v-col cols="12" md="12">
                <v-card height="100%" dark elevation="10">
                    <v-row class="ml-2">
                        <v-col cols="24" md="2">
                            <v-btn color="success" class="mr-3" @click="formatJson">格式化(Format)</v-btn>
                        </v-col>
                        <v-col cols="24" md="2">
                            <v-btn color="warning" @click="resetJsonStr">重置(Reset)</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card dark elevation="10">
                    <v-col cols="24" md="20" class="ma-4">
                        <v-row justify="center">
                            <v-col cols="12" md="12">
                                <v-textarea label="原Json" no-resize outlined rows="50" row-height="15"
                                            v-model="jsonStr">

                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <v-card dark elevation="10">
                    <v-col cols="24" md="20" class="ma-4">
                        <v-row justify="center">
                            <v-col cols="12" md="12">
                                <v-textarea label="Format Result" no-resize outlined rows="50" row-height="15" disabled v-model="formatResult"></v-textarea>
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
                    { text: 'Format', disabled: false },
                    { text: 'Format Json', disabled: false }
                ],
                jsonStr: '',
                formatResult: '',
            }
        },
        created() {

        },
        methods: {
            async formatJson() {
                const {data: res} = await this.$http.post('/format/json', {"jsonStr": this.jsonStr})
                if (res.meta.status !== 200) return
                this.formatResult = res.data.result
            },
            resetJsonStr() {
                this.jsonStr = ''
                this.formatResult = ''
            }
        }
    }
</script>

<style scoped>

</style>