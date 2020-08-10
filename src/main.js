import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import CreateCategory from '@/components/app/CreateCategory.vue'
import CreateTodo from '@/components/app/CreateTodo.vue'
import './assets/css/style.css'

Vue.config.productionTip = false

Vue.component('CreateCategory', CreateCategory)
Vue.component('CreateTodo', CreateTodo)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
