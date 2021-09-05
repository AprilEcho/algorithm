function resolveData(data) {
  var arr = [];
  for (var key in data) {
    var str = key + '=' + data[key];
    arr.push(str);
  }
  return arr.join('&')
}

function itheima(option) {
  var xhr = new XMLHttpRequest();

  var qs = resolveData(option.data);

  if (option.method.toUpperCase() === 'GET') {
    xhr.open(option.method, option.url + '?' + qs)
    xhr.send()
  } else if (option.method.toUpperCase() === 'POST') {
    xhr.open(option.method, option.url)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(qs)
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText);
      option.success(result)
    }

  }

}