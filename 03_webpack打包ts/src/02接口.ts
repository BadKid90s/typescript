// 接口

/* 
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
接口: 是对象的状态(属性)和行为(方法)的抽象(描述)
接口类型的对象
    多了或者少了属性是不允许的
    可选属性: ?
    只读属性: readonly
*/

/* 
需求: 创建人的对象, 需要对人的属性进行一定的约束
  id是number类型, 必须有, 只读的
  name是string类型, 必须有
  age是number类型, 必须有
  sex是string类型, 可以没有
*/

// // 定义人的接口
// interface IPerson {
//     id: number
//     name: string
//     age: number
//     sex: string
// }

// const person: IPerson = {
//     id: 1,
//     name: 'zs',
//     age: 1,
//     sex: '男'
// }
// console.log(person);



// // 定义人的接口
// interface IPerson {
//     readonly id: number
//     name: string
//     age: number
//     sex?: string
// }

// const person: IPerson = {
//     id: 1,
//     name: 'zs',
//     age: 18,
// }
// // person.id = 1 //无法分配到 "id" ，因为它是只读属性
// console.log(person);

// readonly vs const
// 最简单判断该用 readonly 还是 const 的方法是看要把它做为变量使用还是做为一个属性。
// 做为变量使用的话用 const，若做为属性则使用 readonly

// // 函数类型
// /* 
// 接口可以描述函数类型(参数的类型与返回的类型)
// */
// interface SearchFunc {
//     (source: string, subString: string): boolean
// }
// const mySearch: SearchFunc = function (source: string, subString: string): boolean {
//     return source.search(subString) > 0
// }
// console.log(mySearch('abcd', 'bc'))


/* 
类类型: 实现接口
1. 一个类可以实现多个接口
2. 一个接口可以继承多个接口
*/
interface Alarm {
    alert(): any;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}
// 类实现接口
class Car implements Alarm {
    alert() {
        console.log("car ....... alert");
    }

}
// 类实现多个接口
class Car2 implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
//接口继承
interface LightableAlarm extends Alarm, Light {

}