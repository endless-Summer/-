
const { response } = require('express');
const express = require('express');

const app = express();
app.get('/home', (request, response) => {

    response.sendFile(__dirname + '/index.html');
});
app.get('/data', (request, response) => {
    response.send('模拟的用户数据')
})
app.listen(9000, () => {
    console.log('服务已经启动, 9000 端口监听中....')
})