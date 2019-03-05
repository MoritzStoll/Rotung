
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Start from './components/Start'
import About from './components/About'
import Card from './components/Card'
import Cards from './components/Cards'
import Manual from './components/Manual'
const routes = [
  {path: '/', component: Start},
  {path: '/about', component: About},
  {path: '/cards', component: Cards},
  {path: '/manual', component: Manual},
]


const router = new VueRouter({
  routes, 
  mode: 'history'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
