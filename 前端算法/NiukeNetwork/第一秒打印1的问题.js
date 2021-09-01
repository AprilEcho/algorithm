// 写一个函数，第一秒打印 1，第二秒打印 2
function f1() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, 1000 * i)
  }
}

// f1();
function f2() {
  for (var i = 0; i < 5; i++) {
    (function f(i) {
      setTimeout(() => {
        console.log(i)
      }, 1000 * i)
    })(i)
  }
}

f2();