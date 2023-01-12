import Vue from 'vue'
import VueRouter from 'vue-router'
import ExploreOptions from '@/views/ExploreOptions.vue'
import ClientPage from '@/views/ClientPage.vue'
import ClientSignup from '@/components/ClientSignup.vue'
import ClientLogin from '@/components/ClientLogin.vue'
import EditTwo from '@/components/EditTwo.vue'
import RestLogin from '@/components/RestLogin.vue'
import RestSignup from '@/components/RestSignup.vue'
import RestList from '@/components/RestList.vue'
import DeleteUser from '@/components/DeleteUser.vue'
import MenuAll from '@/components/MenuAll.vue'
import ViewMenu from '@/components/ViewMenu.vue'
import RestoSignOut from '@/components/RestoSignOut.vue'
import RestaurantEdit from '@/components/RestaurantEdit.vue'
import ClientProfile from '@/components/ClientProfile.vue'
import EditMenu from '@/components/EditMenu.vue'
import RestaurantFocus from '@/views/RestaurantFocus.vue'
import RestAdmin from '@/views/RestAdmin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    name: 'home',
    component: ExploreOptions
    // component: () => import('../views/RestaurantFocus.vue'),
  },
  {
    path : '/restaurant/:restaurantId/',
    name : 'restaurant',
    component : RestaurantFocus,
    props: true
  },
        {
            path : "/client",
            component : ClientPage
          },
        {
            path : "/client-profile",
            component : ClientProfile
          },
          {
            path: "/rest-admin/",
            name: 'rest-admin',
            component : RestAdmin
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
          path: "/edit-rest",
          name : "edit-rest",
          component : RestaurantEdit
        },
        {
          path: "/edit-menu",
          name : "edit-menu",
          component : EditMenu
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
          path: "/rest-signout",
          component : RestoSignOut,
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
          children: [
            {
              name: "viewmenu",
              path: "/menu",
              component: ViewMenu
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

