function shallowCopy(obj) {
  var data={};
  for (var i in obj){
    // for in  循环，也会循环原型链上的属性，所以这里需要判断一下确定某个对象是否具有带指定名称的属性
    if (obj.hasOwnProperty(i)){
        data[i] = obj[i]
    }
  }
  return data

}



//要被拷贝的数据，包含字符串、对象、函数、数组
var data = {
  name:"test",
  main:{
    a:1,
    b:2
  },
  fn:function(){
    console.log('fn')
  },
  friends:[1,2,3,[22,33]]
}
var obj2 = shallowCopy(data);
//由于name是基本数据类型，会开辟一个新的地址来储存我们拷贝的内容，所以原数据的name属性不会被修改
obj2.name = '修改成功'
//   main是引用类型，浅拷贝会直接拷贝它的地址，所以原数据的这个值也会改变
obj2.main.a = 100
console.log(data,obj2);
