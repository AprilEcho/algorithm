let n = 16;
function f(n) {
  return n===0?false:(n&(n-1))===0;
}
let x = f(n);
console.log(x)
