import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './js/ui.js'
import './components/index.js'
import './js/nouislider.min.js'
import './js/moment.min.js'

// import './assets/css/style.css'
Vue.prototype.$EventBus = new Vue();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
