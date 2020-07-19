import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import AboutMe from "@/components/about/AboutMe"
import Welcome from "@/components/Welcome"

Vue.use(VueRouter);

  const routes = [
  {
    path: '/', name: 'Home', component: Home, redirect: '/welcome',
    children: [
       {path: '/welcome', name: 'Welcome', component: Welcome },
       {path: '/about/me', name: 'AboutMe', component: AboutMe }
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router
