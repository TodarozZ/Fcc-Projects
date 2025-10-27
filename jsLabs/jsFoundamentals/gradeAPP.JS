function getAverage(testScoresArray) {
    const average = testScoresArray.reduce((total, score) => total + score, 0) / testScoresArray.length;
    return average
}

function getGrade(studentScore) {
    if (studentScore === 100) {
        return "A+"
    }
    else if (studentScore >= 90) {
        return "A"
    } else if (studentScore >= 80) {
        return "B"
    } else if (studentScore >= 70) {
        return "C"
    } else if (studentScore >= 60) {
        return "D"
    } else {
        return "F"
    }
}

function hasPassingGrade(studentScore) {
    if (getGrade(studentScore) === "F") {
        return false
    } else {
        return true
    }
}

function studentMsg(scoresArr, studentScore) {
    const average = getAverage(scoresArr);
    const grade = getGrade(studentScore);
    const passing = hasPassingGrade(studentScore);
    if (passing === true) {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`
    } else {
        return `Class average: ${average}. Your grade: ${grade}. You failed the course.`
    }
}


console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]))

console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75))