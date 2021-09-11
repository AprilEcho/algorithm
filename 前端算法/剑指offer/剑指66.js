// 构建乘积数组
// 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，
// 其中 B[i] 的值是数组 A 中除了下标 i 以外的元素的积,
// 即 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。

function multiply(array) {
  let n = array.length;
  let left = Array(n);
  left[0] = 1;
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * array[i - 1]
  }

  let right = Array(n);
  right[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * array[i + 1]
  }

  let b = [];
  for (let i = 0; i < n; i++) {
    b[i] = left[i] * right[i];
  }
  return b;
}
