import Vue from 'vue'
import VueRouter from 'vue-router'
import ExploreOptions from '@/views/ExploreOptions.vue'
import ClientPage from '@/views/ClientPage.vue'
import ClientSignup from '@/components/ClientSignup.vue'
import EditProfile from '@/components/EditProfile.vue'
import SignIn from '@/views/SignIn.vue'
import RestLogin from '@/views/RestLogin.vue'
import RestSignup from '@/views/RestSignup.vue'
import RestMain from '@/views/RestMain.vue'
import RestList from '@/components/RestList.vue'
import ViewMenu from '@/views/ViewMenu.vue'



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
            path : "/client",
            component : ClientPage,
            meta: [
              {
              title: "Client"
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
          path: "/edit",
          component : EditProfile,
          meta: [
            {
              title: "Edit User Info"
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
          path: "/signIn",
          component : SignIn,
          meta: [
            {
              title: "Sign In"
            }
          ]
        },
                 {
          path: "/restList",
          component : RestList,
          meta: [
            {
              title: "Restaurant List"
            }
          ]
        },
                 {
          path: "/menu",
          component : ViewMenu,
          meta: [
            {
              title: "Menu"
            }
          ]
        },
      ]
const router = new VueRouter({
  routes,
})

export default router

