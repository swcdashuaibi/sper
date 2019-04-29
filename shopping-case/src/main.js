// 样式引入
import './css/index.css';
import '../node_modules/mint-ui/lib/style.css'
import './lib/mui-master/dist/css/mui.css'
// 引入vue
import Vue from 'vue';

import VueRouter from "vue-router";
// 引入模板文件
import app from './app.vue'

// 引入mint-ui功能
import { Header} from 'mint-ui';
Vue.component(Header.name, Header);


Vue.use(VueRouter)

var vm = new Vue({
    el: "#app"
    ,data:{
        msg: '123'
    }
    // ,components:{
    //     login
    // }
    ,render: function (create) {
        return create(app)
    }
})