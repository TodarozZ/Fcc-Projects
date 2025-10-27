function confirmEnding(str, endCompare) {
    const strIndex = str.length - 1;
    const endCompareIndex = endCompare.length - 1;
    const subStr = strIndex - endCompareIndex;
    const compareSubStr = str.slice(subStr);
    if (endCompare.toLowerCase() === compareSubStr.toLowerCase()) {
        return true
    } else {
        return false
    }
}
console.log(confirmEnding("Congratulation", "on"));


//best practice (ai Write) below
function confirmEnding(str, endStr) {
    return str.slice(str.length - endStr.length) === endStr;
} //see difference compact sintax