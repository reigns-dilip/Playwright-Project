
//1 ARITHMETIC - Using some reference value ex: c

var a = 10
var b = 20

var c = a + b
console.log(c)

var c = a - b
console.log(c)

var c = a * b
console.log(c)

var c = a / b
console.log(c)    //QUOTIENT

var c = a % b
console.log(c)    //REMINDER

var c = a ** b
console.log(c)    //POWER ROOT   -> 10* 10* 10* 10* up to 20 times



//2 ASSIGNMENT  -  Reusable

var a = 20
var b = 10
  
a = a + b     //a = 20 + 10 = 30
console.log(a)

a = a - b     //a = 30 - 10 = 20
console.log(a)

a = a * b     //a = 20 * 10 = 200
console.log(a)

a /= b     //a = 200 / 10 = 20
console.log(a)

a %= b     //a = 20 % 10 = 0
console.log(a)

a **= b    //a = 0 ** 10 = 0
console.log(a)


//3 COMPARISON - Boolean

var a = 100
var b = "100"

console.log( a == b )     //It will check only content value - Interview question

console.log( a === b )    //It will check strictly content and typeof value

console.log( a < b )

console.log( a <= b )

console.log( a > b )

console.log( a >= b )

console.log( a != b )

console.log( a !== b )


//4 UNARY

//POST
var a = 100
console.log( a++ )
console.log (a)

//PRE
var b = 200
console.log( ++b )


//5 LOGICAL

// && AND , || OR , ! NOT

let age = 245

if( age >=18 && age <= 60 ){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}


/** && - AND
 * true true = true
 * true false = false
 * false true = false
 * false false = false
 */


age = 23

if(age >=18 && age <= 60 || age == 30){
console.log(true)
}
else{
    console.log(false)
}


/** || - OR
 * true true = true
 * true false = true
 * false true = true
 * false false = false
 */


true (1) | false (0)

//NOT

var abc = 1

if( !abc ){
    console.log("Yes")
}else{
    console.log("No")
}


//6 TERNARY ?

var ab = 18

var cd = (ab === "18") ? true : false
console.log(cd)


var cd = (ab === "18" || ab <= 23) ? "Yes" : "No"
console.log(cd)
