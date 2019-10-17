// 入口JS
import Vue from 'vue'
import App from './App'


// 引入路由对象
import router from './router/index'
// 引入vuex对象
// import store from './store'
// 引入顶部的tab
import LyTab from 'ly-tab'

// 使用菜单栏
Vue.use(LyTab);

let store
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});







