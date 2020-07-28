import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/homePage',
    children: [
      {
        path: 'homePage',
        name: 'homePage',
        component: () => import('../views/homePage.vue')
      },
      {
        path: 'bookCate',
        name: 'bookCate',
        component: () => import('../views/bookCate.vue')
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('../views/category.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/mine.vue')
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
