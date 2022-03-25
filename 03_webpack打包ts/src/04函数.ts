// 命名函数
function add(x: number, y: number): number {
    return x + y
}

// 匿名函数
let myAdd = function (x: number, y: number): number {
    return x + y;
}
let myAdd2: (x: number, y: number) => number =
    function (x: number, y: number): number {
        return x + y
    }

// 可选参数和默认参数
function buildName(firstName: string = 'A', lastName?: string): string {
    if (lastName) {
        return firstName + '-' + lastName
    } else {
        return firstName
    }
}

console.log(buildName('C', 'D'))
console.log(buildName('C'))
console.log(buildName())

// 可变参数
function infoFun(x: string, ...args: string[]): void {
    console.log(x, args)
}
infoFun('abc', 'c', 'b', 'a')

//函数重载
/* 
函数重载: 函数名相同, 而形参不同的多个函数
需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加 
*/

// 重载函数声明
function add2(x: string, y: string): string
function add2(x: number, y: number): number

// 定义函数实现
function add2(x: string | number, y: string | number): string | number {
    // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
    if (typeof x === 'string' && typeof y === 'string') {
        return x + y
    } else if (typeof x === 'number' && typeof y === 'number') {
        return x + y
    } else {
        return 0
    }
}

console.log(add2(1, 2))
console.log(add2('a', 'b'))
// console.log(add(1, 'a')) // error