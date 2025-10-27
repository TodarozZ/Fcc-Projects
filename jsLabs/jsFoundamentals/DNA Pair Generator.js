function pairElement(str) {
    let arr = str.split("");
    let newArr = []

    arr.forEach(item => {
        if (item === "G") {
            newArr.push(["G", "C"]);
        } else if (item === "C") {
            newArr.push(["C", "G"]);
        } else if (item === "A") {
            newArr.push(["A", "T"]);
        } else if (item === "T") {
            newArr.push(["T", "A"]);
        }
    })

    return newArr;
}

console.log(pairElement("TTGAG"));