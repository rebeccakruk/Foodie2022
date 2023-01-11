import Vue from 'vue'
import VueRouter from 'vue-router'
import ExploreOptions from '@/views/ExploreOptions.vue'
import ClientPage from '@/views/ClientPage.vue'
import ClientSignup from '@/components/ClientSignup.vue'
import ClientLogin from '@/components/ClientLogin.vue'
import EditTwo from '@/components/EditTwo.vue'
import RestLogin from '@/components/RestLogin.vue'
import RestSignup from '@/components/RestSignup.vue'
import RestMain from '@/views/RestMain.vue'
import RestList from '@/components/RestList.vue'
import DeleteUser from '@/components/DeleteUser.vue'
import MenuAll from '@/components/MenuAll.vue'
import ViewMenu from '@/views/ViewMenu.vue'
import RestaurantFocus from '@/views/RestaurantFocus.vue'



Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    name: 'home',
    component: ExploreOptions
    // component: () => import('../views/RestaurantFocus.vue'),
  },
  {
    path : '/restaurant/:restaurantId',
    name : 'restaurant',
    component : RestaurantFocus
  },
        {
            path : "/client",
            component : ClientPage
          },
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
          component : EditTwo,
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
          path: "/rest-main/:restaurantId",
          component : RestMain,
          meta: [
            {
              title: "Restaurant Main"
            }
          ]
        },
         {
          path: "/signIn",
          component : ClientLogin,
          meta: [
            {
              title: "Sign In"
            }
          ]
        },
         {
          path: "/menuAll",
          component : MenuAll,
          meta: [
            {
              title: "All Menu Items"
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
                 {
          path: "/delete",
          component : DeleteUser,
          meta: [
            {
              title: "delete"
            }
          ]
        },
      ]
const router = new VueRouter({
  routes,
})

export default router

