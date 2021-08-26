Function.prototype.myApply=function(context){
  // 获取调用`myApply`的函数本身，用this获取，如果context不存在，则为window
  var context = context || window;
  var fn = Symbol();
  context[fn] = this;
  //获取传入的数组参数
  var args = arguments[1];
  if (args == undefined) { //没有传入参数直接执行
    // 执行这个函数
    context[fn]()
  } else {
    // 执行这个函数
    context[fn](...args);
  }
  // 从上下文中删除函数引用
  delete context.fn;
}
// bind()函数
Function.prototype.bindcopy = function(){

  const args = Array.prototype.slice.call(arguments)
  const t = args.shift()
  const self = this

  return function(){
    return self.apply(t,args)
  }
}
