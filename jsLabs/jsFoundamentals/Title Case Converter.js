function titleCase(str) {
    const separateStr = str.split(" ");
    separateStr.forEach((word, index) => {
        separateStr[index] = word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    return separateStr.join(" ");
}