
//we can store one or more values - any values
//Array will start from index - 0,1,2,3,.....
//Length will start from 1,2,3,4,......

//Let ar = new Array()

var ar = [10, 20, "javascript", true]

console.log(ar)   //Actual values

console.log(ar.length)    //Array Length

console.log(ar.length - 1)   //Array Index

console.log(ar[0])
console.log(ar[1])
console.log(ar[2])
console.log(ar[3])
console.log(ar[4])

//1 PUSH        //Add to end
var ar = [10, 20, 30, 40]
ar.push(500, "javascript", [1, 2, 3])
console.log(ar)

//Access Dimension array values

console.log(ar[6])
console.log(ar[6][1])

//2 POP       //Remove from end
ar.pop()
console.log(ar)


//3 SHIFT       //Removing first element

var ar = [100, 200, 300, 400]

ar.shift()
console.log(ar)


//4 UNSHIFT     //Adding first element

ar.unshift(1, 2, 3)
console.log(ar)


//5 CONCAT      //Merge Arrays
var ar1 = [1, 2, 3]
var ar2 = [4, 5, 6]
var ar3 = [7, 8, 9]

var s = ar1.concat(ar2, ar3)
console.log(s)


//6 JOIN        //Joing and converting it to string
var ar = [10, 20, 30]

var s = ar.join('<-->')
console.log(s)


//7 REVERSE     //Flip order
var ar = [101, "javascript", false, 202]
ar.reverse()
console.log(ar)


//8 SLICE - starting index between (ending index +1)
var ar = [10, 20, 30, 40, 50, 60, 70]
var s = ar.slice(2, 5)
console.log(s)


//9 TO STRING
var arr = [10, 20, "javascript", "playwright", true, false]

var s = arr.toString()
console.log(s)


//10 MAP - Transformatter

var m = [4, 9, 16, 25, 36, "javascript"]

var s = m.map(function (v, i, a){
    return v + 2
})
console.log(s)


//11 FILTER

var f = [1,2,3,4,5,6,7,8,9]

var s = f.filter(function(v){
    return v > 2
})
console.log(s)

//Odd & Even

//Odd
var s = f.filter(function(v){
return v % 2 == 0
})
console.log(s)

//Even
var s = f.filter(function(v){
return v % 2 != 0
})
console.log(s)


//12 VALUES

var v = [101, "javascript", false, 202]

var s = v.values()
for (const e of s) {
    console.log(e)
}


//13 FOR EACH
v.forEach(function(a , b){
    console.log(a , b)
})


//14 REDUCE
var r = [10, 20, 30, 40]

var s = r.reduce(function(prev, cur){
    return prev + cur
}, 5)

console.log(s)

//prev + cur
//5 + 10 = 15
//15 + 20 = 35
//35 + 30 = 65
//65 + 40 = 105


//15 SPLICE - Starting index, Delete countNumber, ............Values
var sp = [100, 200, 300, 400, 500, 600, 700]

//remove
sp.splice(2,3)
console.log(sp)

//replace
sp.splice(2, 1, 1, 10, 2, 20)
console.log(sp)

//add
sp.splice(2, 0, "javascript", true, "playwright")
console.log(sp)


//16 SORT

var sot = [11, 9, 81, 23, 18, 7, 2, 9, 16, 11]

//ASC
var asc = sot.sort(function(a, b){
    return a - b
})
console.log(asc)

//a - b
//11 - 9 = 2 (swap)
//11 - 81 = -70 (no swap)
//11 - 23 = -12 (no swap)
//11 - 18 = -7 (no swap)
//11 - 7 = 4 (swap)
//11 - 2 = 9 (swap)
//11 - 9 = 2 (swap)
//11 - 16 = -5 (no swap)
//11 -11 = 0 (no swap)

//DSC
var dsc = sot.sort(function(a,b){
    return b - a
})
console.log(dsc)