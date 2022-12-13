import Vue from 'vue'
import VueRouter from 'vue-router'
import ExploreOptions from '@/views/ExploreOptions'
import ClientLogin from '@/views/ClientLogin'


Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    component : ExploreOptions,
    meta: [
      {
        title: "Explore"
      },
    ]
  },
        {
            path : "/login",
            component : ClientLogin,
            meta: [
              {
              title: "Login"
              },
        ]},
      ]
const router = new VueRouter({
  routes
})

export default router

