<template>
    <div>
        <v-breadcrumbs :items="breadItems" dark></v-breadcrumbs>
        <!-- 卡片视图 -->
        <v-row justify="center">
            <v-card dark elevation="8" height="250" width="250" class="avatar-img" style="border-radius: 50%;top: 80px;z-index: 1;border: 5px solid #eee;">
                <v-img dark src="../../static/avatar.png" style="width: 100%;height: 100%;border-radius: 50%;"></v-img>
            </v-card>
        </v-row>
        <v-row justify="center">
            <v-card dark elevation="10" height="500" width="1000" style="top: -50px;">
                <v-card-text class="ml-8 mr-8" style="margin-top: 150px">
                    <v-row justify="center">
                        <v-col cols="24" md="2" class="mr-3">
                            <v-chip color="#199ae4" >
                                <v-avatar left>
                                    <v-icon>mdi-emoticon-cool-outline</v-icon>
                                </v-avatar>
                                <span>DDDDanny</span>
                            </v-chip>
                        </v-col>
                        <v-col cols="24" md="2" class="mr-4">
                            <v-chip color="#6259da">
                                <v-avatar left>
                                    <v-icon>mdi-ab-testing</v-icon>
                                </v-avatar>
                                <span>测试工程师</span>
                            </v-chip>
                        </v-col>
                        <v-col cols="24" md="2" class="mr-2">
                            <v-chip color="#7235ac">
                                <v-avatar left>
                                    <v-icon>mdi-arrow-decision-auto-outline</v-icon>
                                </v-avatar>
                                <span>自动化测试</span>
                            </v-chip>
                        </v-col>
                        <v-col cols="24" md="2" class="mr-3">
                            <v-chip color="#6259da">
                                <v-avatar left>
                                    <v-icon>mdi-dev-to</v-icon>
                                </v-avatar>
                                <span>测试开发</span>
                            </v-chip>
                        </v-col>
                        <v-col cols="24" md="2" class="mr-1">
                            <v-chip color="#7235ac">
                                <v-avatar left>
                                    <v-icon>mdi-head-flash-outline</v-icon>
                                </v-avatar>
                                <span>探索新鲜事物</span>
                            </v-chip>
                        </v-col>
                    </v-row>
                    <v-row justify="right" class="mt-8">
                        <v-col cols="24" md="2" class="mr-2">
                            <v-chip color="#6259da">
                                <v-avatar left>
                                    <v-icon>mdi-sticker-emoji</v-icon>
                                </v-avatar>
                                <span>追求完美</span>
                            </v-chip>
                        </v-col>
                        <v-col cols="24" md="2" class="mr-2">
                            <v-chip color="#7235ac">
                                <v-avatar left>
                                    <v-icon>mdi-vector-square</v-icon>
                                </v-avatar>
                                <span>强迫症</span>
                            </v-chip>
                        </v-col>
                        <v-col cols="12" md="2" class="mr-4">
                            <v-chip color="#199ae4">
                                <v-avatar left>
                                    <v-icon>mdi-bookshelf</v-icon>
                                </v-avatar>
                                <span>学习和提升</span>
                            </v-chip>
                        </v-col>
                        <v-col cols="24" md="3" class="mr-1">
                            <v-chip color="#7235ac">
                                <v-avatar left>
                                    <v-icon>mdi-google-controller</v-icon>
                                </v-avatar>
                                喜欢做一些有趣的事情
                            </v-chip>
                        </v-col>
                        <v-col cols="24" md="2" class="mr-2">
                            <v-chip color="#199ae4">
                                <v-avatar left>
                                    <v-icon>mdi-language-python</v-icon>
                                </v-avatar>
                                <span>Python</span>
                            </v-chip>
                        </v-col>
                    </v-row>
                    <v-row justify="center" class="mt-8">
                        <v-col cols="24" md="4" class="mr-6">
                            <v-chip color="#199ae4">
                                <v-avatar left>
                                    <v-icon>mdi-github</v-icon>
                                </v-avatar>
                                <span>GitHub: https://github.com/DDDDanny</span>
                            </v-chip>
                        </v-col>
                        <v-col cols="24" md="4" class="mr-2">
                            <v-chip color="#6259da">
                                <v-avatar left>
                                    <v-icon>mdi-email</v-icon>
                                </v-avatar>
                                <span>Email: 707956456@qq.com</span>
                            </v-chip>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                breadItems: [
                    { text: 'Home', disabled: false, to: '/' },
                    { text: 'About', disabled: false },
                    { text: 'AboutMe', disabled: false }
                ],
            }
        },
        created() {

        },
        methods: {

        }
    }
</script>

<style scoped lang="less">

</style>
