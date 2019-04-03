import $ from 'jquery';

import './css/index.css';

import Vue from 'vue';

import VueRouter from "vue-router";

import app from './app.vue'

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