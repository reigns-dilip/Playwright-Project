
//Single line comment

/**
 * Multi
 * Lines
 * Comment
 */


//1 FIXED VALUES (Literals)

console.log( 123456 )     //Number

console.log( 'qwerty 12345 !@#$%^' )    //String

console.log( true )      //Boolean

console.log( [101, "javascript" , false] )   //Array

console.log( { name: "tej" , age: 24 , coure: true })  //Oject


//2 VARIABLE VALUES

//VAR - Function Scope

var a = 100

var a = 200     //Re-Declaration is allowed

a = 300         //Re-Assignment is allowed

console.log(a)


//LET - Block Scope

let b = 101

//let b = 202     //Re-Declaration is not allowed

b = 303           //Re-Assignment is allowed

console.log(b)


//CONST - Block & Immutable Scope

const c = 1000

//const c = 2000  //Re-Declaration is not allowed

//c = 3000        //Re-Assignment is not allowed  

console.log(c)


//DATA TYPES :

//PRIMITIVE - Immutable (cannot be change) - Stack Memory

//Number
var n = 786
console.log(typeof n)

//string
var s = "javascript"
console.log(typeof s)

//boolean
var b1 = true
console.log(typeof b1)

//NaN - Not a Number
var na = "Hello" * 2
console.log(typeof na)

//null - We are assigning as initial value null like intensionally assigning
var nu = null
console.log(typeof nu)


//Undefined - We are creating a reference but not assigned any values
var un
console.log(typeof un)


//BIGINT
var bi = 12345678901234567890n;
console.log(typeof bi)



//NON PRIMITIVE - Mutable (can be change) - HEAP MEMORY

//Object
var obj = {
    name : "tej" , age : 24 , course : true
}
console.log(typeof obj)


//Array
var ar = [101, "javascript" , false]
console.log(typeof ar)


//Function - It is a block of reusable code
function greet(){
    console.log("Hello world!")
}

greet()

greet()


//Example

var person = {
    id : 1 , name : "tej" , age : 24
}

console.log(person)

var newPerson = person

console.log(newPerson)

newPerson.name = "easwar"

console.log(newPerson)
console.log(person)


//We can store one or more values - any values
//Array will start from index - 0,1,2,3,......
//Length will start from 1,2,3,4,........

var arr = [10, "raviteja" , false ,[ 202 , true , "playwright"]]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

console.log(arr.length)     //property

console.log(arr.length -1)  //Index count

console.log(arr[3])
console.log(arr[3][0])      //2D Array
console.log(arr[3][1])
console.log(arr[3][2])



//1 PUSH
var ar = [10, 20, 30, 40]

ar.push(500, true, "playwright")
console.log(ar)


//2 POP
ar.pop()
console.log(ar)


//3 SHIFT
var arr = [100, 200, 300, 400]

arr.shift()
console.log(arr)

//4 UNSHIFT
arr.unshift(1, 2, 3)
console.log(arr)


//5 CONCAT
var arr1 = [1,2,3]
var arr2 = [4,5,6]
var arr3 = [7,8,9]

var s = arr1.concat(arr2, arr3)
console.log(s)


// Diff
arr1.push(arr2, arr3)
console.log(arr1)


//6 JOIN
var ar = [10, 20, 30, 40]

var s = ar.join(' <-> ')
console.log(s)


//7 REVERSE
var arr = [10, false, "javascript", 202, true]

arr.reverse()
console.log(arr)


//8 SLICE - Starting index between (Ending index +1)

var arr = [100, 200, 300, 400, 500, 600, 700]

var s = arr.slice(2, 5)
console.log(s)

//String Slice
let text = "javascript"
let results = text.slice(0, 4)
console.log(results)

// Slice from a specific index
let text1 = "javascript"
let result1 = text.slice(4)
console.log(result1)

//Slice Negative index
let text2 = "javascript"
console.log(text.slice(-6))

//Slice Array
let fruits1 = ["Apple", "Banana", "Mango", "Orange"]
let result2 = fruits1.slice(1, 3)
console.log(result2)
console.fruits1


//9 To String

//Number to string
let num = 100
let result = num.toString()
console.log(result)
console.log(typeof result)

//Boolean to string
let value = true
console.log(value.toString())
console.log(typeof value.toString())

//Array to string
let fruits = ["Apple", "Mango", "Bannana"]
console.log(fruits.toString())

//
let price = 500
console.log("Before:" , price , typeof price)
price = price.toString()
console.log("After:" , price , typeof price)


