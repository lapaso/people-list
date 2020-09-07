import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

Vue.filter('formatWorth', function (value) {
  if (!value) return ''
  return Math.floor(value / 1000) + 'M';
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
