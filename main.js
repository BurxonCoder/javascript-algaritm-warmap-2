"use strict"

//stringTime

// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"


function  stringTime(str , n) {
let str1 = ''
    for (let i = 0; i<n; i++) {
        str1 +=str
      }
      return str1
    
}

console.log(stringTime("Hi", 3));
