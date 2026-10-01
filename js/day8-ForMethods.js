
let arr = [101, "javascript", 304, false, 50.96]

console.log("--- FOR ---")
//FOR LOOP

for(let i=0 ; i <= arr.length-1 ; i++){
    console.log(arr[i])
}


console.log("--- FOR OF ---")
//FOR OF

for(const val of arr){
    console.log(val)
}


console.log("--- FOR EACH ---")
//FOR EACH

arr.forEach((v, i) => console.log(v, i))


var obj = {name: "tej", age: 24, course: false}

console.log("--- FOR IN ---")
// FOR IN

for(const key in obj){
    //console.log(key)
    //console.log(obj[key])
    console.log(key, "=", obj[key])
}


// ARRAY DESTRUCTURE

console.log("--- BASIC ---")
//BASIC
var v = [10, 20, 30]

var [a, b, c] = v

console.log(a)
console.log(b)
console.log(c)


console.log("--- SKIP ---")
//SKIP
var v = [10, 20, 30, 40, 50, 60]

var [a, , , d, , f] = v

console.log(a)
//console.log(c)
console.log(d)
console.log(f)
console.log([a, , , d, , f])


console.log("--- REST ---")
//REST,
var v = [10, 20, 30, 40, 50, 60]

var [a, ...d] = v

console.log(a)
//console.log(b)
//console.log(c)
console.log(d)

//SPREAD
console.log(...d)


//SWAP
// var abc = 123, xyz = 786;
let abc = 123
let xyz = 786 ;

[abc , xyz] = [xyz, abc]

console.log(abc)
console.log(xyz)