import Vue from 'vue'
import VueRouter from 'vue-router'
import ExploreOptions from '@/views/ExploreOptions.vue'
import ClientLogin from '@/components/ClientLogin.vue'
import ClientSignup from '@/views/ClientSignup.vue'
import SignIn from '@/views/SignIn.vue'
import ClientProfile from '@/views/ClientProfile.vue'
import RestLogin from '@/views/RestLogin.vue'
import RestSignup from '@/views/RestSignup.vue'
import RestMain from '@/views/RestMain.vue'


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
            component : ClientLogin,
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
        },
        {
          path: "/rest-login",
          component : RestLogin,
          meta: [
            {
              title: "Restaurant Login"
            }
          ]
        },
        {
          path: "/rest-signup",
          component : RestSignup,
          meta: [
            {
              title: "Restaurant Signup"
            }
          ]
        },
        {
          path: "/rest-main",
          component : RestMain,
          meta: [
            {
              title: "Restaurant Main"
            }
          ]
        },
        {
          path: "/profile",
          component : ClientProfile,
          meta: [
            {
              title: "Profile"
            }
          ]
        },
         {
          path: "/signIn",
          component : SignIn,
          meta: [
            {
              title: "Sign In"
            }
          ]
        },
      ]
const router = new VueRouter({
  routes,
})

export default router

