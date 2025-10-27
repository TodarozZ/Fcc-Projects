function steamrollArray(nestedArr) {
    let newArr = [];
    for (const item of nestedArr) {
        if (Array.isArray(item)) {
            for (const subItem of item) {
                newArr.push(...steamrollArray(subItem));
            }
        } else {
            newArr.push(item);
        };
    };
    return newArr;
};

//correct code
function steamrollArray(arr) {
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...steamrollArray(item)); // Recursively flatten nested arrays
        } else {
            result.push(item); // Push non-array elements directly
        }
    }
    return result;
  }