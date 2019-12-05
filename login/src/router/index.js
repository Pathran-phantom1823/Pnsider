import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Accounts from "@/components/AccountList1.vue"
import Analytics from '@/components/Analytics.vue'
import Landing from "@/components/users/Landing.vue";
import Form from "@/views/Form.vue";
import store from '@/store'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    beforeEnter: (to, from, next) => {
      if (store.getters.isLoggedIn) {
        next("/about");
      } else {
        next();
      }

    },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      meta:{
        requiresAuth:true
      }
  },
  {
    path: "/accounts2021",
    name: "accounts2021",
    component: Accounts,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: "/analytics",
    name: "analytics",
    component:Analytics,
    meta:{
      requiresAuth:true
    }
  },
  {
    path: "/Home",
    name: "home",
    component: Landing
  },
  {
    path: "/Form",
    name: "form",
    component: Form
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/') 
  } else {
    next() 
  }
})

export default router;