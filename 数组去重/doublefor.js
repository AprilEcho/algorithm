function Array_dfor(data) {
  const newArray = [];
  let isRepeat;
  for (let i = 0; i < data.length; i++) {
    isRepeat = false;
    for (let j = 0; j < newArray.length; j++) {
      if (data[i] === newArray[j]) {
        isRepeat = true;
        break;
      }
    }
    if (!isRepeat) {
      newArray.push(data[i]);
    }
  }
  return newArray;
}
