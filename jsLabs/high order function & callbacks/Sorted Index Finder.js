function getIndexToIns(arr, num) {
    arr.sort((a, b) => a - b);
    return arr.findIndex(el => el >= num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2