let a = 10;
function b() {
  console.log(a);
}
(function () {
  let a = 20;
  b()
})()