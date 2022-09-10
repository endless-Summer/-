import thenFs from "then-fs";
console.log('A')
async function getAllfile() {
    console.log('B')
    const r1 = await thenFs.readFile('./1.txt', 'utf8')
    console.log(r1)
    const r2 = await thenFs.readFile('./2.txt', 'utf8')
    console.log(r2)
    const r3 = await thenFs.readFile('./3.txt', 'utf8')
    console.log(r3)
    console.log('D')
}
getAllfile();
console.log('C')
//输出结果  A > B > C > 111 > 222 > 333 > D