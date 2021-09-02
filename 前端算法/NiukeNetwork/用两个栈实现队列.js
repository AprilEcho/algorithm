var inStack = [];
var outStack = [];
function push(node)
{
  // write code here
  inStack.push(node)
}
function pop()
{
  // write code here
  if(outStack.length==0){
    while(inStack.length!=0){
      outStack.push(inStack.pop())
    }
  }
  return outStack.pop();
}
module.exports = {
  push : push,
  pop : pop
};