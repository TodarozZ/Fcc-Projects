function reverseString (str) {
  const separateStr = str.split("");
  const reverseArr = separateStr.reverse();
  const reversedStr = reverseArr.join("");
  return reversedStr
}

console.log(reverseString("hello"));
console.log(reverseString("howdy"));