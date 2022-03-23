(() => {
    //定义接口
    interface Iperson {
        firstname: string
        lastname: string
    }

    class Person {
        firstname: string
        lastname: string
        fullname: string

        constructor(firstname: string, lastname: string) {
            this.firstname = firstname
            this.lastname = lastname
            this.fullname = firstname + "_" + lastname
        }

        showPerson() {
            console.log(this.fullname);

        }


    }

    const showname = (person: Person) => {
        console.log(person.fullname);

    }
    const person = new Person("诸葛", "孔明")
    person.showPerson()
    showname(person)

})()