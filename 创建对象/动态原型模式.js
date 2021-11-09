function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  if (typeof this.sayName != "function") {//在sayName（）不存在的情况下，才会将它添加到原型中
    Person.prototype.sayName = function () {
      console.log(this.name)
    }
  }
}

var friend = new Person("流浪者", 29, "前端开发")
friend.sayName();