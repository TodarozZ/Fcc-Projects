function findLongestWordLength(str) {
    const separateStr = str.split(" ")
    let longestWord = 0;
    for (let word of separateStr) { 
        if (word.length > longestWord) {
            longestWord = word.length
        }
    } return longestWord
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


console.log(findLongestWordLength("Google do a barrel roll"));


console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));


console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));