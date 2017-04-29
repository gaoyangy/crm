// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import $ from 'jquery'
import vueResource from 'vue-resource'
import axios from 'axios'
import 'iview/dist/styles/iview.css' // 使用 CSS

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(iView);
Vue.use(vueResource);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})