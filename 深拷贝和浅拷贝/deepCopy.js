function deepCopy(obj) {
  if (typeof obj !== 'object') return obj;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj;
}


//要被拷贝的数据，包含字符串、对象、函数、数组
var data = {
  name: "test",
  main: {
    a: 1,
    b: 2
  },
  fn: function () {
    console.log('fn')
  },
  friends: [1, 2, 3, [22, 33]]
}
var obj2 = deepCopy(data);
obj2.name = '修改成功'
obj2.main.a = 100
console.log(data, obj2);
