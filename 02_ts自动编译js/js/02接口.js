(function () {
    //输出姓名
    var showName = function (person) {
        return person.firstname + "_" + person.lastname;
    };
    console.log(showName({ firstname: "zs", lastname: 'w' }));
})();
