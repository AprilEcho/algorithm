function debounce(fn, delay) {
  var timeout = null;
  return function (e) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay)
  }
}

function handle() {
  console.log('防抖', Math.random())
}

window.addEventListener('scroll', debounce(handle, 50))