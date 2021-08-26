function new_instanceof(left, right) {
  let _left = left.__proto__
  while (_left !== null) {
    if (_left === right.prototype) {
      return true
    }
    _left = _left.__proto__
  }
  return false
}

console.log(new_instanceof(Number,String))