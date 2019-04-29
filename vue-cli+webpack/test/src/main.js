// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/public'

// Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {   // 使用钩子函数对路由进行权限跳转
//   const role = localStorage.getItem('username');
//   if ( !role && to.path !== '/login' && to.path !== '/register' ) {  // 如果用户不存在，并且访问的页面不是登录和注册，就前往登录页面
//     next('/login');
//   } else if ( to.meta.permission ) {  // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
//     role === 'admin' ? next() : next('/403');
//   } else {
//
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
