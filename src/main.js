// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import VueSweetAlert from 'vue-sweetalert'

Vue.config.productionTip = false
Vue.use(VueSweetAlert)

router.beforeEach((to, from, next) => {
    // to and from are both route objects
    next()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store: store,
    router: router,
    template: '<App/>',
    components: { App }
})