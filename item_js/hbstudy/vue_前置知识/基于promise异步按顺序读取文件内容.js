import thenFs from "then-fs";
thenFs
    .readFile('./12.txt', 'utf-8')
    .catch(err => {
        console.log(err.message)
    }) //.catch放在前面可以避免因为前面的错误导致后续的.then无法执行;;如放在最后就会都不执行
    .then((r1) => {
        console.log(r1)
        return thenFs.readFile('./2.txt', 'utf-8')
        //在.then中如果返回了一个新的实例对象,那么可以继续用 .then调用 成功执行上一个函数之后的回调函数
    })

    .then((r2) => {
        console.log(r2)
        return thenFs.readFile('./3.txt', 'utf-8')

    })

    .then((r3) => {
        console.log(r3)
    })
