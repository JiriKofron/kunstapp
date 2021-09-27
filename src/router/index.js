import { createRouter, createWebHistory } from 'vue-router';
// import { getAuth } from 'firebase/auth';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(
        /* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'
      );
    },
    // meta: {
    //   authRequired: true,
    // },
  },
  {
    path: '/customers',
    name: 'Customers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(
        /* webpackChunkName: "customers" */ '../views/Customers.vue'
      );
    },
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/customers/add',
    name: 'ZakazniciAdd',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(
        /* webpackChunkName: "customers" */ '../components/ZakazniciAdd.vue'
      );
    },
    // meta: {
    //   authRequired: true,
    // },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ '../views/About.vue');
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
