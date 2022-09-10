//1.引入express

const { json } = require('express');
const express = require('express');

//2. 创建应用对象 
const app = express();

//3.创建路由规则 
app.get('/server', (request, response) => {
    //设置响应头  为了设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send('hello AJAX -2 ');
});

//可以接收任意类型的请求 
app.all('/server', (request, response) => {
    //设置响应头  为了设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头  所有的headers都可以使用,包括自定义和预定义的.
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    response.send('hello AJAX POST');
});

//JSON响应
app.all('/json-server', (request, response) => {
    //设置响应头  为了设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头  所有的headers都可以使用,包括自定义和预定义的.
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置一个响应数据
    const data = {
        name: 'atHeaven'
    }
    //对对象进行字符串转换 
    let str = JSON.stringify(data)
    //设置响应体 这个方法只能接收字符串和maven
    response.send(str);
});

//IE缓存
app.get('/ie', (request, response) => {
    //设置响应头  为了设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send('hell, ie! 2');
});

//延时响应
app.get('/delay', (request, response) => {
    //设置响应头  为了设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin', '*');
    //设置响应体
    setTimeout(() => {
        response.send('延时响应');
    }, 3000);
});

//jQuery服务
app.all('/jQuery-server', (request, response) => {
    //设置响应头  为了设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头  所有的headers都可以使用,包括自定义和预定义的.
    response.setHeader('Access-Control-Allow-Headers', '*');
    //response.send('hello,jQuery ajax')
    const data = { name: '好好学习' }
    response.send(JSON.stringify(data))
});

//axios服务
app.all('/axios-server', (request, response) => {
    //设置响应头  为了设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头  所有的headers都可以使用,包括自定义和预定义的.
    response.setHeader('Access-Control-Allow-Headers', '*');
    //response.send('hello,axios ajax')
    const data = { name: '好好学习' }
    response.send(JSON.stringify(data))
});

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头  为了设置允许跨域 
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头  所有的headers都可以使用,包括自定义和预定义的.
    response.setHeader('Access-Control-Allow-Headers', '*');
    //response.send('hello,axios ajax')
    const data = { name: '好好学习' }
    response.send(JSON.stringify(data))
});

//jsonp 服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")')
    const data = {
        name: '我只是我,还有你'
    }
    //将数据转化为字符串
    let str = JSON.stringify(data)
    //返回结果
    response.end(`handle(${str})`)
});

//jsonp实例检查 服务
app.all('/jsonp-check', (request, response) => {
    // response.send('console.log("hello jsonp")')
    const data = {
        exist: 1,
        tip: '用户名已存在'
    }
    //将数据转化为字符串
    let str = JSON.stringify(data)
    //返回结果
    response.end(`handle(${str})`)
});

//jQuery-jsonp实例检查 服务
app.all('/jQuery-jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")')
    const data = {
        name: 'xiaohong',
        hobby: ['football', 'PCgame', 'reading']
    }
    //将数据转化为字符串
    let str = JSON.stringify(data)
    //接收callback参数
    let cb = request.query.callback;
    //返回结果
    response.end(`${cb}(${str})`)
});

//CROS 服务 
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