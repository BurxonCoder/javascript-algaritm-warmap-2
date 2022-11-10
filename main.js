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
   
   
   
//stringBits


function stringBits(str) {
    let temp = ""   
    for (let i = 0; i < str.length; i+=2) {
        temp += str[i]
        }
    return temp
    
}
  console.log(stringBits("Hello"));
  
  //stringSplosion
  
function stringSplosion (str){
    let splosion = ""
for (let i = 0; i < str.length; i++) {
splosion += str.substring(0 , i)    
}
return splosion + str
}

console.log(stringSplosion("abs"));



//last2

function last2(str) {
    let last = ""
    for (let i = 0; i < str.length-1; i++) {
if ( str[i] == "x" && str[i - 1] == 'x') {
    last++
      }        
    }
    return last 
}
console.log(last2("axxxaaxx"))


//arrayCaunt9

function arrayCaunt(nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
if (nums[i]==9) {
    count++
   }      
}
    return count  
}
console.log(arrayCaunt([1, 9, 9]));