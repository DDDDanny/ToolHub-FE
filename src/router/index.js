import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";

Vue.use(VueRouter);

  const routes = [
  {
    path: '/', name: 'Home', component: Home
  },
];

const router = new VueRouter({
  routes
});

export default router
