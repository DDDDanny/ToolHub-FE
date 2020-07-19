import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import AboutMe from "@/components/about/AboutMe"
import Welcome from "@/components/Welcome"
import AboutToolHub from "@/components/about/AboutToolHub"

Vue.use(VueRouter);

  const routes = [
  {
    path: '/', name: 'Home', component: Home, redirect: '/welcome',
    children: [
       {path: '/welcome',  component: Welcome },
       {path: '/about/me',  component: AboutMe },
       {path: '/about/toolHub',  component: AboutToolHub },
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router
