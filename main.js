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



// frontTimes 

function frontTimes(str , n ) {
if (str.lenght < 4) {
    return str.substring(0 , 3).repeat(n) 
    
}else{
    return str.substring(0,3).repeat(n)
}

}

console.log(frontTimes("Abs", 3))


