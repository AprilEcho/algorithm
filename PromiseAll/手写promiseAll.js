function PromiseAll(promises) {
  //返回一个Promise对象
  return new Promise((resolve, reject) => {
    //判断传入的参数是否为数组
    if (!Array.isArray(promises)) {
      return reject(new Error("传入的参数不是数组"))
    }
    const res = [];
    //设置一个计时器
    let count = 0;
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(value => {
        res[i] = value;
        if (++count === promises.length) {
          resolve(res)
        }
      }).catch(e => reject(e))
    }
  })
}
PromiseAll([1, 2, 3]).then(o => console.log(o))
PromiseAll([1,Promise.resolve(3)]).then(o=>console.log(o))
PromiseAll([1,Promise.reject(3).then(o=>console.log(o))])