
//CONDITIONAL STATEMENTS

//IF, ELSE IF, ELSE -> SWITCH -> BREAK,CONTINUE


let marks = 55

if(marks <= 100 && marks >= 85){
    console.log("GRADE : A")
}
else if(marks <= 84 && marks >= 65){
    console.log("GRADE : B")
}
else if(marks <= 64 && marks >= 35){
    console.log("GRADE : C")
}
else if(marks >= 100){
    console.log(" Not possible to get this much marks ")
}
else{
    console.log("FAIL")
}


//SWITCH

let day = 6

switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    default :
    console.log("Happy Its WeekEnd!")
    break                    
}