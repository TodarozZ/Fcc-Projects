function destroyer(arr, ...rmvItem) {
    let newArr = [];
    arr.forEach(element => {
        if (!rmvItem.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));