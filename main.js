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



//countXX

function countXX(str) {
    let count = 0
    for (let i = 0; i < str.length-1; i++) {
if (str[i] == 'x' && str[i + 1] =='x') {
    count++
    }        
 }
 return count
}

console.log(countXX("abcxx"));



//doubleX

// doubleX("axxbb") → true
// doubleX("axaxax") → false
// doubleX("xxxxx") → true

function  doubleX(str) {
let dubl = str.indexOf('x')  
if (str[dubl + 1] === 'x') {
    return true
    
} else{
    return false
}
   }
   console.log(doubleX("axxbb"));