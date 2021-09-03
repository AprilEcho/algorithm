function printMatrix(matrix)
{
  // write code here
  if (!matrix) return [];
  let result = [];

  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  while ((left <= right) && (top <= bottom)) {
    for(let i = left;i<=right;i++) {
      result.push(matrix[top][i])
    }
    top++;
    for(let i = top; i<= bottom;i++) {
      result.push(matrix[i][right])
    }
    right--;
    if(left>right || top > bottom){
      break;
    }
    for(let i = right; i>= left;i--) {
      result.push(matrix[bottom][i])
    }
    bottom--;
    for(let i = bottom; i>= top;i--) {
      result.push(matrix[i][left])
    }
    left++;
  }
  return result;
}
module.exports = {
  printMatrix : printMatrix
};