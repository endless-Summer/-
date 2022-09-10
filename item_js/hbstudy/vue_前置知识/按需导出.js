export let s1 = '111'
export let s2 = 'ccc'
export function say() { }

export default {
    a: 30
}

//1每个模块可以使用多次按需导出
//2 按需导入的成员名称必须和按需导出的名称保持一致
// 3按需导入时,可以使用关键字 as 进行重命名
// 4按需导入可以和默认导入一起使用