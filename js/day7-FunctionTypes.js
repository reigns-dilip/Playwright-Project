// FUNCTION TYPES

//1 Regular, Declaration, Basic/Normal - Function

//Without parameter
function greet(){
    console.log("This is Declaration")
}
greet()
greet()


//with parameter
function isEven(a){
    console.log(a % 2 == 0)
}
isEven(5)
isEven(10)


//Multi parameter
function isPositive(l, h, b){
    return l + h + b
}
console.log(isPositive(10, 5, 2))


//Default
function defalt(name = "Guest"){
    console.log("Hi", name)
}
defalt()
defalt("Gugan")



//2 EXPRESSION FUNCTION

//without parameter
let a1 = function(){
    console.log("This is expression")
}
a1()


//with parameter
let a2 = function(a, b, c){
    console.log(a + b - c)
}
a2(100, 20, 50)


//default
let a3 = function(name = "Ai Bot"){
    console.log("Hi Iam", name)
}

a3()
a3("Jagan")



//3 ARROW FUNCTION

//without parameter
let b1 = () => {
    console.log("This is arrow")
}
b1()


//with parameter and without block
let b2 = (num1, num2) => console.log(num1 + num2)
b2(10, 20)


//with parameter and without return keyword
let b3 = (l, h, b) => l + h - b
console.log(b3(15, 20, 15))



//4 ANYNOMOUS FUNCTION

console.log("Start")
setTimeout(() => console.log("Middle"), 1000)
console.log("End")


//5 IIFE - Immediate Invoked Function Expression

// (function()){
// let key = "Tester@123"
// console.log("secret key is hidden")
// })()



//6 CALL BACK

function oppo(call){
    console.log("This is Reno series")
}

function vivo(){
    console.log("This is V series")
}
oppo(vivo())


//7 CALL BACK HELL


//8 ASYNC FUNCTION
