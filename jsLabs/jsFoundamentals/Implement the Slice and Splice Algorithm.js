function frankenSplice(arr, secArr, index) {
    const copyArr = secArr.slice();
    copyArr.splice(index, 0, ...arr
    );
    return copyArr;
}

// ES2024 -->
const frankenSpliceES2024 = (arr, secArr, index) => secArr.toSpliced(index, 0, ...arr);