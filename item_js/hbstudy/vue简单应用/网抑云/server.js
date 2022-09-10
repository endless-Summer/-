const { json } = require('express');
const express = require('express');
app.get('/cros-server', (request, response) => {
    //设置响应头  为了设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin', '*');
    //允许所有的头信息,包括自定义
    response.setHeader('Access-Control-Allow-Headers', '*');
    //允许所有的发送方法
    response.setHeader('Access-Control-Allow-Method', '*');
    //设置响应体
    response.send('hello CROS ');
});
//4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动, 8000 端口监听中....')
})