// 1. Write a function that takes an integer minutes and converts it to seconds.

let minutes = 5

function minutesToSeconds(m) {

    let sum = m * 60 
    let finishedSeconds = `${minutes} minutes is ${sum} seconds!`
    return finishedSeconds
}

console.log(minutesToSeconds(minutes))
