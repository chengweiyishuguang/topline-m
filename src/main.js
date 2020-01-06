import Vue from 'vue'
import App from './App.vue'
//引入store
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //挂载store
  store
}).$mount('#app')
