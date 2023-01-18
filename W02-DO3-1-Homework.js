// Write a function that takes your age in years and returns your age in minutes.

const ageToMinutes = age => {
   let fullAge = age *  525600

   console.log(`a ${age} years old person has lived for about ${fullAge} minutes! That's a lot of minutes!`)
   return fullAge
}

ageToMinutes(19)
