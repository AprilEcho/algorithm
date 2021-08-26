function quickSort(data) {
  if (data.length <= 1) {
    return data;
  }
  var pivot, pivotIndex, left, right;
  left = [];
  right = [];
  pivotIndex = Math.floor(data.length / 2);
  pivot = data.splice(pivotIndex, 1)[0];
  for (var i = 0; i < data.length; i++) {
    if (data[i] < pivot) {
      left.push(data[i])
    } else {
      right.push(data[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}
