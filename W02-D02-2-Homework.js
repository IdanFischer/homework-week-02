// 2. Write a function that converts hours into seconds.

let hours = 5

function hoursToSeconds(h) {

    let sum = (h * 60) * 60
    let finishedSeconds = `${hours} hours is ${sum} seconds!`
    return finishedSeconds
}

console.log(hoursToSeconds(hours))

