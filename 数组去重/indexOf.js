function Array_indexOf(data) {
  var arr = [];
  for (var i = 0; i < data.length; i++) {
    if (arr.indexOf(data[i]) === -1){
      arr.push(data[i])
    }
  }
  return arr;
}