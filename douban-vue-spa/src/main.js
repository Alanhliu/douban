// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import Mint from 'mint-ui'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from './components/loading'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(VueAxios, Axios)
Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
