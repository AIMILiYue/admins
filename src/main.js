import Vue from 'vue'
import App from './App.vue'
// 默认去找router.js文件，没有文件去找router文件夹，找到文件夹，默认去找index.sjs文件
// 划分路由文件的目的：可以对模块进行路由分类，方便管理维护
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
