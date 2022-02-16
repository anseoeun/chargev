import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/index.js'



// import './assets/css/style.css'
Vue.prototype.$EventBus = new Vue();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
