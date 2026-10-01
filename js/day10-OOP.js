
//OBJECT ORIENTED PROGRAMMING

/**
 * In javascript, object is collection of {key: value} pair.
 * where each key is associated with values
 * (which could be a string, number, boolean, array, function, even another object).
 */

let obj = {
    name : "tej" ,
    age : 24 ,
    course : false ,
    abc : function (){
        console.log("Hello World")
    },
    xyz : {company : "TechM", empId : 786, job : true}
}

console.log(obj)

//DOT NOTATION
console.log(obj.name)

//BRACKET NOTATION
console.log(obj["age"])

//CHAINING
console.log(obj.xyz.empId)

//ADD
obj.arr = [101, "javascript", true]
console.log(obj)

//UPDATE
obj.name = "Dilip"
console.log(obj)

//DELETE
delete obj.course
console.log(obj)




/**
 * In JS, OOP has 4 main pillars:
 * Object Oriented Programming System/Structure
 * 
 * 1. Encapsulation
 *   - Wrapping data + methods together inside a class.
 * 
 * 
 * 2. Inheritance
 *   - One class inherits from properties & methods from another.
 * Extends is a keyword. Use to access parent in to child.
 * Super is a keyword. Use to access from parent objects in to child class.
 * 
 * 
 * 3. Polymorphism
 *   - Same method name, different behavior.
 * 1. Method Overloading - not possible
 * 2. Method OverRiding
 * 
 * 
 * 4. Abstraction
 *   - Hide internal implementation / code logic.
 * 
 * 
 * 1. Class is a Blue print / Template for properties and Methods.
 * * ClassName - PascalCase
 * * MethodName, PropertyName - camelcase 
 * 
 * 
 * 2. Constructor
 *   - A constructor is a special function used to create and initialize objects.
 * 
 * * This is a keyword. Use to represent current class objects.
 * * Static is a keyword. Use to store unique values.
 * * Static variable, Methods. We can access using only class name, without creating an object.
 * 
 */


//1 ENCAPSULATION - Parent, Base, Super

class Encaps {   //PascalCase

    constructor(){
        this.name = "Vignesh"    //globalproperty
    }

    login(name){     //localParam
        console.log("Hi" , name , "Welcome to Course!")
    }

    logout(){      //methods - camelcase
        console.log("Thank you for visit" , this.name)
    }
}

let p1 = new Encaps()    //Object

p1.login("Dinesh")
p1.login("Harish")
p1.logout()
p1.logout()

let p2 = new Encaps()
p2.login("Guna")



//INHERITANCE - Child, Derived, Sub

class Inherit extends Encaps{
    constructor(course){
        super()
        this.course = course
    }
    setcourse(){
        console.log("Tell me your case :" , this.course)
    }
}

let p3 = new Inherit("Playwright")
p3.setcourse()

let p4 = new Inherit("GenAi")
p4.setcourse()
p4.login("Praveen")



//POLYMORPHISM

class poly extends Inherit{
    setcourse(fee){
        console.log("Your course fee is :" , fee)
    }
}

let p5 = new poly()
p5.setcourse(1200)



//STATIC

class state {

    static count = 0

    constructor(){
        this.name = "Guest"
        state.count++
    }

    static getbalance(){
        console.log("Hi", this.name , "Your balance is :", state.count)
    }
}

let p6 = new state()

state.getbalance()
state.getbalance()

let p7 = new state()
state.getbalance()