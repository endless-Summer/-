//1 使用ES6导入 jQuery 
import $ from 'jquery'
//导入图片

import './css/index.css'
import './css/index.less'


//导入图片
import logo from './images/logo.png'
//给img的src动态赋值
$('.box').attr('src', logo)

import '@/js/test/info.js'
//2. 定义jQuery的入口函数
$(function () {
    //3. 实现奇偶行的变色效果 
    $('li:odd').css('background-color', 'Aquamarine')
    $('li:even').css('background-color', 'red')
})

console.log('测试 source map')