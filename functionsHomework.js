//1) Define a function, as a function declaration,
// maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. 
//If they are the same, return that number. 
//Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbersthat (num1,num2) {
    if(num1>=num2) {
        return num1
    }else {
        return num2
    }
}
//console.log(maxOfTwoNumbersthat(7,6))

//2)
const maxOfThree = function (num1,num2,num3) {
    if (num1>=num2 && num1>=num3) {
        return num1
    }else if (num2>=num1 && num2>=num3) {
        return num2
    }else {
        return num3
    }
}
//console.log(maxOfThree(4,56,6))

//3)
function isCharAVowel (letter) {
    letter= letter.toLowerCase()
    if(letter === "a" || letter ==="e" || letter ==="i" ||letter ==="o" || letter ==="u" ) {
        return true
    } else {
        return false
    }
}
//console.log(isCharAVowel("A"))

//4)
let sum = 0;
const sumArray = function (...numbers) {
   for(i=0; i<numbers.length;i++) {
    sum +=numbers[i]
   }
   return sum
}

//console.log(sumArray(1,2,3,4,5,20,100,100))

//5)
let sum1 = 1
function multiplyArray (...numbers) {
    for(i=0;i<numbers.length;i++) {
        sum1 *=numbers[i]
    }
    return sum1
}
//console.log(multiplyArray(1,2,3,4))

//6) 
const numArgs = function (...totalArguments) {
    return totalArguments.length
}
//console.log(numArgs("chicken",1,2,3,4,5))

//7)
function reverseString (string) {
    console.log(array1 = string.split("").reverse().join(""))
    //console.log(array1.reverse().join(""))                                   
    }
   // reverseString("notebook")

//8)

const longestStringInArray = function (...strings) {
    let longestString = ""
    strings.forEach((string) => {
        if(string.length > longestString.length) {
            longestString= string
        }
     })
    console.log(longestString)
}
//longestStringInArray("chickens","rooster","number","asdasdasdasdasda","s")
// another way to do 8) from office hours
// const longestStringInArray1 = (strArray) => {
//     let longest=0
//     for(i=0;i<strArray.length;i++) {
//        if(strArray[i].length>longest) {
//             longest = strArray[i].length
//         }

//     }
//     console.log(longest)
// }

//  longestStringInArray1(["chicken","hi","bye","gotchussss"])


//9)
function stringsLongerThan (stringArrayOne,stringLength) {
    const newArray = []
    for(i=0;i<stringArrayOne.length;i++) {
        if(stringArrayOne[i].length > stringLength){
            newArray.push(stringArrayOne[i])
        }
    }
console.log(newArray)
}

stringsLongerThan(["chicken","rice","bro"],3)


