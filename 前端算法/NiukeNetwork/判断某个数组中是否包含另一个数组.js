//判断某个数组中是否包含另一个数组
function isContained (a, b){
  if(!(a instanceof Array) || !(b instanceof Array)) return false;
  if(a.length < b.length) return false;
  var aStr = a.toString();
  for(var i = 0, len = b.length; i < len; i++){
    if(aStr.indexOf(b[i]) == -1) return false;
  }
  return true;
}