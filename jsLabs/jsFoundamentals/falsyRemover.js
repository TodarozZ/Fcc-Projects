/*
  function bouncer(arr) {
  const trueArr = arr.map((item) => item ? item : false);
  console.log(trueArr);

    return trueArr.filter((item) => item !== false);
}
*/

//refactored
function bouncer(arr) {
    return arr.filter((item) => item);
}

console.log(bouncer([7, "ate", "", false, 9]))