(function () {
    var Person = /** @class */ (function () {
        function Person(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.fullname = firstname + "_" + lastname;
        }
        Person.prototype.showPerson = function () {
            console.log(this.fullname);
        };
        return Person;
    }());
    var showname = function (person) {
        console.log(person.fullname);
    };
    var person = new Person("诸葛", "孔明");
    person.showPerson();
    showname(person);
})();
