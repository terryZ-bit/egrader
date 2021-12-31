import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import less from 'less'
import ElementUI from 'element-ui'
import './assets/defult.less'
import 'element-ui/lib/theme-chalk/index.css'
import dayjs from "dayjs";
import router from './router'

Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.prototype.less = less
Vue.use(dayjs)
Vue.config.productionTip = false
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
