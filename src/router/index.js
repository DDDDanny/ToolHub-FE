import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import AboutMe from "@/components/about/AboutMe"
import Welcome from "@/components/Welcome"
import AboutToolHub from "@/components/about/AboutToolHub"
import BaseData from "@/components/faker/BaseData"

Vue.use(VueRouter);

  const routes = [
  {
    path: '/', name: 'Home', component: Home, redirect: '/welcome',
    children: [
       { path: '/welcome',  component: Welcome },
       { path: '/about/me',  component: AboutMe },
       { path: '/about/toolHub',  component: AboutToolHub },
       { path: '/faker/base',  component: BaseData },
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router
