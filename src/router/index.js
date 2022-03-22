import Vue from 'vue'
import Router from 'vue-router'
import login from "@/view/home/Login";
import home from "@/view/home/Home";
import testMain from "@/view/test/TestMain";
import RoleChoose from "@/view/login/RoleChoose";
import Enroll from "@/view/home/Enroll";
import ForgotPassword from "@/view/home/ForgotPassword";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: login
        },

        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/testMain',
            name: 'testMain',
            component: testMain
        },
        {
            path: '/RoleChoose',
            name: 'RoleChoose',
            component: RoleChoose
        },
        {
            path: "/Enroll",
            name: "Enroll",
            component: Enroll
        },
        {
            path: "/ForgotPassword",
            name: "ForgotPassword",
            component: ForgotPassword
        }
    ],
    mode: "history"
})