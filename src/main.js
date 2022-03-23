import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import less from 'less'
import TDesign from 'tdesign-vue';
// 引入组件库全局样式资源
import './assets/defult.less'
import 'tdesign-vue/es/style/index.css';
import router from "./router"
import store from './store/index'
import md5 from 'md5'

Vue.use(TDesign)
Vue.prototype.less = less
Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.prototype.md5 = md5

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
