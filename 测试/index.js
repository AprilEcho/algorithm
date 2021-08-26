// function deepClone(data) {
// //   if (typeof data !== 'object') return;
// //   var newarr = data instanceof Array ? [] : {}
// //   for (var key in data) {
// //     if (data.hasOwnProperty(key)) {
// //       newarr[key] = typeof data[key] === 'object' ? deepClone(data[key]) : data[key]
// //     }
// //   }
// //
// // }


Function.prototype.myapply = function (content) {
  var content = content || window;
  var fn = Symbol();
  content[fn] = this;
  var args = arguments[1];
  if (args==undefined){
    content[fn]()
  }else{
    content[fn](...args)
  }
  delete content.fn

}
Function.prototype.bind = function () {


  var args = Array.prototype.slice.call(arguments);
  var t = args.shift();
  var that = this
  return function () {
    return that.apply(t,args)

  }

}



