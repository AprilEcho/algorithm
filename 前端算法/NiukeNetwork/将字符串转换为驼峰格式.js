function cssStyle2DomStyle(sName) {
  var strs = sName.split('-');
  if(strs[0] == ""){
    var strs = sName.slice(1).split('-');
  }
  for(var i = 1;i < strs.length; i++){
    strs[i] = strs[i].charAt(0).toUpperCase()+strs[i].slice(1);
  }
  return strs.join('')
}