function reverseString(str) {
  // 方法一
  return str.split('').reverse().join('')
  // 方法二
  // return [...str].reverse().join('')
}
console.log(reverseString('hello'))