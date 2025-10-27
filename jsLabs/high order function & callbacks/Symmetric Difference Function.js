function diffArray(arr1, arr2) {
    let newArr = [];
    arr1.filter((item) => !arr2.includes(item) ? newArr.push(item) : false);
    arr2.filter((item) => !arr1.includes(item) ? newArr.push(item) : false);
    return newArr;  
}

function diffArray(arr1, arr2) {
    // Elementi in arr1 ma non in arr2
    const diff1 = arr1.filter(item => !arr2.includes(item));
    // Elementi in arr2 ma non in arr1
    const diff2 = arr2.filter(item => !arr1.includes(item));
    // Unisci e ritorna
    return [...diff1, ...diff2];
}