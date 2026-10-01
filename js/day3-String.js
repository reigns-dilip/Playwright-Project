
//STRING METHODS

var str = "javascript programming"

console.log(str)

console.log(str.length)

console.log(str[0])


//1 SLICE - Starting index between (ending index +1)

var str = "javascript programming"

var s = str.slice(0, 10)
console.log(s)

var s = str.slice(11, 22)
console.log(s)

var s = str.slice(-22, -11)
console.log(s)


//2 SUBSTRING
var s = str.substring(11, 22)
console.log(s)

var s = str.substring(-22, -11)
console.log(s)


//3 REPLACE
var str = "Java Selenium Javascript Playwright"

var s = str.replace("Java", "Type")
console.log(s)


//4 REPLACE ALL
var s = str.replaceAll("Java", "#")
console.log(s)


//5 UPPERCASE
var str = "JavaScript"

console.log(str.toUpperCase())


//6 LOWERCASE
var str = "PLAYWRIGHT"

console.log(str.toLowerCase())


//7 CONCAT
var str1 = "Javascript"
var str2 = "Programming"
var str3 = "Language"

console.log(str2.concat(str3, str1))


//8 TRIM
var str = "   Javascript with Playwright   "

console.log(str.trim())
console.log(str.trimEnd())
console.log(str.trimStart())


//9 INDEX OF - First Index

var str = "Javascript program"
console.log(str.indexOf("a"))

//10 LAST INDEX OF
console.log(str.lastIndexOf("a"))

//11 CHAR AT - Returns the character at the specified index
console.log(str.charAt(1))


//12 REPEAT
var str = "Javascript "
console.log(str.repeat(5))


//13 SEARCH
var str = "Javascript with Playwright"
console.log(str.search("w"))


//14 SPLIT - Return type array
var str = "Raviteja@gmail.com"
console.log(str.split("a"))


//15 BOOLEAN RETURN TYPED METHODS
var str = "Javascript with Playwright"

//includes
console.log(str.includes('w'))

//Starts with
console.log(str.startsWith('j'))

//Ends with
console.log(str.endsWith('h'))