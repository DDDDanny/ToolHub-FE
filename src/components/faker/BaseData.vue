<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <v-container>
            <v-row>
                <v-col cols="6" md="2">
                    <v-card class="pa-5" dark elevation="10" height="750px">
                        world
                    </v-card>
                </v-col>
                <v-col>
                    <v-row no-gutters>
                        <v-col cols="12" md="12">
                            <!-- 卡片视图 -->
                            <v-card dark elevation="10" class="pa-5" height="320px">
                                hello
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row style="margin-top: 20px">
                        <v-col cols="12" md="12">
                            <!-- 卡片视图 -->
                            <v-card dark elevation="10" class="pa-5" height="400px">
                                hello
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
            }
        }
    }
</script>

<style scoped>

</style>
