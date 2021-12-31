import Vue from 'vue'
import Router from 'vue-router'
import helloWorld from "../components/HelloWorld";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'hello',
            component: helloWorld
        }
    ],
    mode: "history"
})