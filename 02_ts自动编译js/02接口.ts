(() => {
    //定义接口
    interface Iperson {
        firstname: string,
        lastname: string
    }
    //输出姓名
    const showName = (person: Iperson) => {
       return person.firstname + "_" + person.lastname
    }

    console.log(showName({firstname:"zs",lastname:'w'}));
    
})()