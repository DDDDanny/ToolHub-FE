import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 配置axios
import axios from 'axios'
import vuetify from "@/plugins/vuetify"
import 'element-ui'
import './plugins/vuetify.js'

Vue.config.productionTip = false;

Vue.use(vuetify);

// 配置请求根路径
axios.defaults.baseURL = 'http://127.0.0.1:5000/api/v1/'

Vue.prototype.$http = axios

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
