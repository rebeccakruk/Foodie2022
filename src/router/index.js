import Vue from 'vue'
import VueRouter from 'vue-router'
import ExploreOptions from '@/views/ExploreOptions.vue'
import ClientLogin2 from '@/views/ClientLogin2.vue'
import ClientSignup from '@/views/ClientSignup.vue'


Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    component : ExploreOptions,
    meta: [
      {
        title: "Explore"
      },
    ],
  },
        {
            path : "/login",
            component : ClientLogin2,
            meta: [
              {
              title: "User Login"
              },
        ]},
        {
          path: "/signup",
          component : ClientSignup,
          meta: [
            {
              title: "Registration"
            }
          ]
        }
      ]
const router = new VueRouter({
  routes,
})

export default router

