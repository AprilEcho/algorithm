function Person(name) {
}
Person.prototype.name = 'keivn';
Person.prototype.getName = function () {
  console.log(this.name);
};
var person1 = new Person();
