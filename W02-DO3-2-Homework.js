// Write a function that takes in an array of numbers and returns the sum of all even numbers.

const array = [10, 3, 7, 9, 4, 1, 8, 2]

const evenSum = arr => {
    let num = 0
    let secondNum = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0 ) {
            // console.log(arr[i])
            num = arr[i]
            secondNum += num
        }
    }
    return secondNum
}
// console.log(array)
console.log(evenSum(array))
