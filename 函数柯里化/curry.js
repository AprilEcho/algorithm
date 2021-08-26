function curry(fn) {
  let judge = (...args) => {
    if (args.length == fn.length) return fn(...args)
    return (...arg) => judge(...args, ...arg)
  }
  return judge
}

let curryTest=curry((a,b,c,d)=>a+b+c+d)


console.log(curryTest(1,2,3)(4))
console.log(curryTest(1,2)(4)(3))
console.log(curryTest(1,2)(3,4))
console.log(curryTest(1)(2)(3)(4))
