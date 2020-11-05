import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import AboutMe from "@/components/about/AboutMe"
import Welcome from "@/components/Welcome"
import AboutToolHub from "@/components/about/AboutToolHub"
import BaseData from "@/components/faker/BaseData"
import ExportData from "@/components/faker/ExportData"
import Encrypt from "@/components/secretCode/Encrypt"
import Decrypt from "@/components/secretCode/Decrypt"
import RealPayment from "@/components/calculate/RealPayment"
import FormatJson from "@/components/format/FormatJson";

Vue.use(VueRouter);

const routes = [
  {
    path: '/', name: 'Home', component: Home, redirect: '/welcome',
    children: [
       { path: '/welcome',  component: Welcome, meta: { title: 'Welcome ToolHub' } },
       { path: '/about/me',  component: AboutMe, meta: { title: 'About Me' } },
       { path: '/about/toolHub',  component: AboutToolHub, meta: { title: 'About ToolHub' } },
       { path: '/faker/dataGenerate',  component: BaseData, meta: { title: 'Generate Data' } },
       { path: '/faker/dataExport',  component: ExportData, meta: { title: 'Export Data' } },
       { path: '/secretCode/encrypt',  component: Encrypt, meta: { title: 'Encrypt' } },
       { path: '/secretCode/decrypt',  component: Decrypt, meta: { title: 'Decrypt' } },
       { path: '/calculate/realPayment',  component: RealPayment, meta: { title: 'Calc Real Payment' } },
       { path: '/format/json',  component: FormatJson, meta: { title: 'Format Json' } },
    ]
  },
];

const router = new VueRouter({
  routes
});

// 路由守卫
router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router
