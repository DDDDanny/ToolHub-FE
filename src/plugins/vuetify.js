import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'


Vue.use(Vuetify);


const opts = {
    theme: {
        dark: true,
    },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
};

export default new Vuetify(opts);
