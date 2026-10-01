
//LOOPS - FOR, WHILE, DO-WHILE

console.log("--- FOR ---")
//FOR - Initialization ; Condition ; Increment/Decrement

for(let i =1; i >= 5; ++i){
    console.log("Hello")
}


console.log("--- WHILE ---")
//WHILE -
//Initialization
//Condition
//Increment/Decrement

let j = 1

while(j >=5 ){
    console.log(j)
    j++
}


console.log("--- DO WHILE ---")
//DO-WHILE
//Initialization
//Increment/Decrement
//Condition

let k = 1

do{
    console.log(k)
    k++
}
while(k <= 5)


console.log("--- NESTED LOOP ---")
//NESTED LOOP

for(let i=1; i <=5; i++){        //Outer Loop Iteration - 1 2 3 4 5
    
    for(let j = 1; j <=5; j++){     //Inner Loop Iteration - 5 5 5 5 5
        console.log("i =", i, "j =", j)
    }
}


console.log("--- CONTINUE ---")
//CONTINUE

for(let a=1; a<=20; a++){
    if(a == 7){
        continue //SKIP - Jumping
    }
    else if(a == 10){
        break  //STOP
    }
    console.log(a)
}