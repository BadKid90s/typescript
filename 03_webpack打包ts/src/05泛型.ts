function createArray2<T>(value: T, count: number) {
    const arr: Array<T> = []
    for (let index = 0; index < count; index++) {
        arr.push(value)
    }
    return arr
}
const arr3 = createArray2<number>(11, 3)
console.log(arr3[0].toFixed())
// console.log(arr3[0].split('')) // error
const arr4 = createArray2<string>('aa', 3)
console.log(arr4[0].split(''))
// console.log(arr4[0].toFixed()) // error


//多个泛型参数的函数
function swap<K, V>(a: K, b: V): [K, V] {
    return [a, b]
}
const result = swap<string, number>('abc', 123)
console.log(result[0].length, result[1].toFixed())

//泛型接口
interface IbaseCRUD<T> {
    data: T[]
    add: (t: T) => void
    getById: (id: number) => T
}

class User {
    id?: number; //id主键自增
    name: string; //姓名
    age: number; //年龄

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}


class UserCRUD implements IbaseCRUD<User> {
    data: User[] = [new User('zs', 14)]


    add(user: User): void {
        user = { ...user, id: Date.now() }
        this.data.push(user)
        console.log('保存user', user.id)
    }

    getById(id: number): User {
        const user1 = this.data.find(item => item.id === id)
        if (user1) {
            return user1;
        }
        return new User('', 0);

    }
}

const userCRUD = new UserCRUD()
userCRUD.add(new User('tom', 12))
userCRUD.add(new User('tom2', 13))
console.log(userCRUD.data)


//泛型类
class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) {
    return x + y
}

let myGenericString = new GenericNumber<string>()
myGenericString.zeroValue = 'abc'
myGenericString.add = function (x, y) {
    return x + y
}

console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))


//泛型约束

// 没有泛型约束
function fn<T>(x: T): void {
    // console.log(x.length)  // error
}

interface Lengthwise {
    length: number;
}

// 指定泛型约束
function fn2<T extends Lengthwise>(x: T): void {
    console.log(x.length)
}

fn2('abc')