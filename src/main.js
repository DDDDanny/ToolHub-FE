import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/CSS/global.css'
// 配置axios
import axios from 'axios'
import vuetify from "@/plugins/vuetify"
import 'element-ui'
import './plugins/vuetify.js'
import ExportUtils from "@/utils/ExportUtils"

Vue.config.productionTip = false;

Vue.use(vuetify);

// 配置请求根路径
// axios.defaults.baseURL = 'http://127.0.0.1:5000/api/v1/'
axios.defaults.baseURL = 'https://apitoolhub.mintblue.top/api/v1/'

Vue.prototype.$http = axios

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');

router.afterEach( (to, from, next) => {
  setTimeout(() => {
    // 增加百度统计
    var _hmt = _hmt || [];
    (function() {
      //每次执行前，先移除上次插入的代码
      document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?ea0fe52663e173b019a5153276c23db4";
      hm.id = "baidu_tj"
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
  }, 0)
})

Object.defineProperty(Vue.prototype, '$utils', {value: ExportUtils})
