
/*
Promise is an object in javascript
It will perform asynchronous operations like API calls, File loading, Time Delays.

It has states:
1. Pending - Default
2. Resolve - Successfull (then)
3. Reject - Failed (catch)
*/

//Approach - 1
let prom1 = new Promise( (resolve, reject) => {
    let payment = false
    if(payment){
        resolve()
    }else{
        reject()
    }
})


//console.log(prom1)


prom1.then(()=> console.log("Sucessfull"))
.catch(()=> console.log("Failure"))
.finally(()=> console.log("This is finally"))



//Approach - 2
let prom2 = new Promise( (resolve, reject) => {
    let payment = true
    if(payment){
        resolve("I got money")
    }else{
        reject("Due to network")
    }
})


prom2.then((res) => console.log(res))
.catch((err) => console.log(err))



/**
 * Async - It will make a function and return a promises
 * Await - It will pause the execution until promise is resolve or reject
 */


async function great(){

    return new Promise( (resolve, reject) =>{
        setTimeout( ()=> {
            resolve("This is Async!"),
            reject(Error("Due to insufficient"))
        } , 3000)
    })
}
console.log(great())


async function display(){
    console.log("Hi")
    try{
        const dt = await great()
        console.log(dt)
    }catch(err){
        console.log(err)
    }
    console.log("Bye!!")
}

display()




//PROMISE ALL
Promise.all( [
    Promise.resolve("This is promise.All"),
    Promise.reject("This is promise.All Error"),
]).then((res) => console.log(res)) .catch((er) => console.log(er))



//PROMISE ALL SETTLED
Promise.allSettled( [
    Promise.resolve("This is promise.AllSettled"),
    Promise.reject("This is promise.AllSettled Error"),
]).then((res) => console.log(res)) .catch((er) => console.log(er))
