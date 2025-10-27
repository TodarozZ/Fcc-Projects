function mutation(arr) {
    const lowerCaseArr = arr.map(str => str.toLowerCase());
    for (let i = 1; i < lowerCaseArr.length; i++) {
        const letters = lowerCaseArr[i].split("");
        for (let j = 0; j < letters.length; j++) {
            if (!lowerCaseArr[0].includes(letters[j]) ) {
                return false;
            }
        }
    }
    return true
}

console.log(mutation(["hello", "Hello"]))