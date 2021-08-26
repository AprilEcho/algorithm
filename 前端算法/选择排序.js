function selectSort(data) {
  for (var i = 0; i < data.length; i++) {
    var minIndex = i;
    var temp;
    for (var j = i + 1; j < data.length; j++) {
      if (data[j] < data[minIndex]) {
        minIndex = j;
      }
    }
    temp = data[i];
    data[i] = data[minIndex];
    data[minIndex] = temp;
  }
  return data;
}