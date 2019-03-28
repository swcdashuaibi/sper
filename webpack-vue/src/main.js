import $ from 'jquery';

import './css/index.css';

import Vue from 'vue';

import main,{title} from './main.vue';

console.log(title)

$(function () {
    $("li:odd").css('backgroundColor',"red");
    $("li:even").css('backgroundColor','blue')
});

// var login = {
//     template: `<h1>这是component组件</h1>`
// };

var vm = new Vue({
    el: "#app"
    ,data:{
        msg: '123'
    }
    // ,components:{
    //     login
    // }
    ,render: function (create) {
        return create(main)
    }
})