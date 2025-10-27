function repeatStringNumTimes(str, repNum) {
  let mainStr = "";
  for (let i = 0; i < repNum; i++) {
    mainStr += str;
  }
  return mainStr;
}