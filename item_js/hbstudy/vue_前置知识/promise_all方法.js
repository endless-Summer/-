import thenFs from 'then-fs';
const arr = [
    thenFs.readFile('./1.txt', 'utf8'),
    thenFs.readFile('./3.txt', 'utf8'),
    thenFs.readFile('./2.txt', 'utf8'),

]
Promise.race(arr).then(result => {
    console.log(result)
}) 