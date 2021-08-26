function throttle(fn, delay) {
  let canRun = true;
  return function () {
    if (!canRun) return;
    canRun = false;
    setTimeout(()=>{
      fn.apply(this,arguments)
      canRun = true
    },delay)
  }
}
function sayHi(e) {
  console.log('节流：', e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi,500));
