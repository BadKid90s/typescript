// 布尔类型
let flag: boolean = true
console.log(flag)

// 数字类型
let a1: number = 10 // 十进制
let a2: number = 0b1010  // 二进制
let a3: number = 0o12 // 八进制
let a4: number = 0xa // 十六进制
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);

// 字符串类型
let namestr: string = 'tom'
namestr = 'jack'
// namestr = 12 // error
let age: number = 12
const info = `My name is ${namestr}, I am ${age} years old!`
console.log(info);

//undefined 和 null
let u: undefined = undefined
let n: null = null
console.log(u == n); //true
console.log(u === n); //false

//数组
// 第一种，可以在元素类型后面接上[]
let list1: number[] = [1, 2, 3]
//第二种方式是使用数组泛型，Array<元素类型>：
let list2: Array<number> = [1, 2, 3]

console.log(list1 == list2); // false
console.log(...list1)  // 1 2 3
console.log(...list2)  // 1 2 3

//元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let t1: [string, number]
t1 = ['hello', 10] // OK
// t1 = [10, 'hello'] // Error

// 当访问一个已知索引的元素，会得到正确的类型：
console.log(t1[0]) // hello
console.log(t1[1]) // 10

//枚举
enum Color {
    Red,
    Green,
    Blue
}
// 枚举数值默认从0开始依次递增
// 根据特定的名称得到对应的枚举数值
let myColor: Color = Color.Green  // 0
//默认情况下，从 0 开始为元素编号。 你也可以手动的指定成员的数值。
console.log(Color.Red, myColor, Color.Blue)
//
enum Color2 { Red = 1, Green = 2, Blue = 4 }
let c2: Color2 = Color2.Green
console.log(Color2.Red, c2, Color2.Blue)

//枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 
//例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字：
let colorName: string = Color2[2]

console.log(colorName)  // 'Green'

// 任意类型
let notSure: any = 4
notSure = 'maybe a string'
notSure = false // 也可以是个 boolean
console.log(notSure);

let list: any[] = [1, true, 'free']
list[1] = 100
console.log(list);


//void类型
// void 类型像是与 any 类型相反，它表示没有任何类型
/* 表示没有任何类型, 一般用来说明函数的返回值不能是undefined和null之外的值 */
function fn(): void {
    console.log('fn()')
    // return undefined
    // return null
    // return 1 // error
}

//object类型
function fn2(obj: object): object {
    console.log('fn2()', obj)
    return {}
    // return undefined  // error
    // return null       // error
}
console.log(fn2(new String('abc')))
// console.log(fn2('abc') // error
console.log(fn2(String))


//联合类型
function toString2(x: number | string): string {
    return x.toString()
}

console.log(toString2(1));
console.log(toString2("qwe"));

//类型断言

/* 
类型断言(Type Assertion): 可以用来手动指定一个值的类型
语法:
    方式一: <类型>值
    方式二: 值 as 类型  tsx中只能用这种方式
*/
/* 需求: 定义一个函数得到一个字符串或者数值数据的长度 */
function getLength(x: number | string) {
    if ((<string>x).length) {
        return (x as string).length
    } else {
        return x.toString().length
    }
}
console.log(getLength('abcd'), getLength(1234))

//类型推断
/* 定义变量时赋值了, 推断为对应的类型 */
let b9 = 123 // number
// b9 = 'abc' // error

/* 定义变量时没有赋值, 推断为any类型 */
let b10  // any类型
b10 = 123
b10 = 'abc'