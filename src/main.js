// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import store from './vuex'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

// 全局注册mint
Vue.use(Mint);
Vue.config.productionTip = false


// 解决移动端点击延迟
fastclick.attach(document.body)

// 导入css
import 'public/css/index.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
