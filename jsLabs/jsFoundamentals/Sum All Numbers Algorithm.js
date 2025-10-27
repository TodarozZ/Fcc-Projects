function sumAll(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    let total = 0;
    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
}