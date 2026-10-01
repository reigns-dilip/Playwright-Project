console.log("Javascript")
//Single line comment
/**
 * Multiple
 * Lines
 * Comment
 * */
//VARIABLES
//VAR - FUNCTION SCOPE
var a = 10
var a = 20        //Re-Declartion is allowed
a = 60            //Re-Assignment is allowed
console.log(a)

//LET - BLOCK SCOPE
let b = 100
// let b = 300   //Re-Declartion is not allowed
b = 200          //Re-Assignment is allowed
console.log(b)   

//CONST - BLOCK & IMMUTABLE SCOPE
const c = 1000
// const c = 2000 //Re-Declartion is not allowed
// c = 3000       //Re-Assignment is not allowed
console.log(c)

//DATA TYPES
//PRIMITIVE - IMMUTABLE (cannot be change) - STACK MEMORY (static)

//number
var n = 786
console.log(typeof n)

//string
var s = "javascript"
console.log(typeof s)

//boolean
var bl = false
console.log(typeof bl)

//null - Intentionally we are assingning as a null value
var nl = null
console.log(typeof nl)

//undefined - just we are create reference without assinging any value
var un
console.log(typeof un)

//NaN - Not a Number
var na = 'hello' * 3
console.log(typeof na)

//BIG INT
var bn = 1234567890123456789n;
console.log(typeof bn)


//NON - PRIMITIVE - MUTABLE (can be change) - HEAP MEMORY

//array
var ar = [10, "javascript" , true]
console.log(typeof ar)

//js object
var obj = {
    name : "12345 @#$% qwerty" , age : 24 , course : true
}
console.log(typeof obj)

//function
function greet(){
    console.log('Hello World!')
}
greet()

const person = {
    id = 1,
    name :  "tej",
    age : 24
}
console.log(person)

const newPerson = person
console.log(newPerson)

newperson.name = "Dilip"
console.log(newPerson)
console.log(person)
