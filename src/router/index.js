import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ReposListComponent from '../views/components/ReposListComponent.vue'
import StarredListComponent from '../views/components/StarredListComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/repos',
    component: () => import(/* webpackChunkName: "Profile" */ '../views/ProfilePage.vue'), 
    children: [
      {
        path: '',
        name: 'profile',
        component: ReposListComponent, 
      },
      {
        path: '/starred',
        name: 'starred',
        component: StarredListComponent,
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
