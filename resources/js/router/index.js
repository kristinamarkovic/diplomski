import Vue from 'vue'
import VueRouter from 'vue-router'
import {mapGetters} from "vuex";
import store from "@/js/store";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/js/views/Home.vue'),
        meta: {
            layout: 'AppLayoutHome'
        }
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('@/js/views/Login.vue'),
        meta: {
            layout: 'AppLayoutHome'
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import('@/js/views/Dashboard.vue'),
        meta: {
            layout: 'AppLayoutDashboard',
            auth: true
        }
    },
    {
        path: "/register",
        name: "Register",
        component: () => import('@/js/views/Register.vue'),
        meta: {
            layout: 'AppLayoutHome'
        }
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    computed: {
        ...mapGetters([
            'user'
        ])
    }
});

router.beforeEach((to, from, next) => {
    const loggedIn = store.getters.isLogged;
    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        next('/login')
        return
    }
    next()
})
export default router
