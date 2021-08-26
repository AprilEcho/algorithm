function insertSort(data) {
  var preIndex, current;
  for (var i = 1; i < data.length; i++) {
    preIndex = i - 1;
    current = data[i];
    while (preIndex >= 0 && current < data[preIndex]) {
      data[preIndex + 1] = data[preIndex];
      preIndex--;
    }
    data[preIndex+1] = current;
  }
  return data;
}