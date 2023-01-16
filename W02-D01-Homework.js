// Write a function that prints (console.log) the numbers from 1 to 100. But log “Fizz” instead of the number if it is divisible by 3, “Buzz” if the number is divisible by 5, and “FizzBuzz” if the number is divisible by both 3 and 5.

function printFizz() {
    for (let i = 0; i <= 100; i++)
        switch (true) {
            case i % 15 === 0:
                console.log("FizzBuzz")
                break;
            case i % 3 === 0:
                console.log("Fizz")
                break;
            case i % 5 === 0:
                console.log("Buzz")
                break;
            default: 
                console.log(i)
                break;

        }
       
}

printFizz()