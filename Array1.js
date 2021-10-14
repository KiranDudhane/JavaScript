//...........19/08/2021----7:00AM

let birthyear = [2000,2004,2005,2006,2007]
let birthyear2 = [2003,1989,2008,2006,2009,1800,1957]

// //[2013,1999]
// //[21,17,16.........]

//------------by self -----------------------------

// let age =[]
// for(let i=0; i< birthyear.length;i++){
//     a = 2021 -birthyear[i]
//     age.push(a) 
// }
// console.log(age)

// let after10yr = []
// for (let j=0; j< birthyear2.length;j++){
//     yr = birthyear2[j] + 10
//     after10yr.push(yr)   
// }
// console.log(after10yr)

// -------------------------by function----------------------------

function printArray(arr){
    let newArr = []

    for (let i=0;i< arr.length;i++){
        newArr.push(2021-arr[i])
    }
    return newArr
}

// let h = printArray(birthyear2)
// console.log(h)

function printArray10(arr){
    let newArr = []

    for (let i=0;i<arr.length;i++){
        newArr.push(arr[i] + 10)
    }
    return newArr
}

let f = printArray10(birthyear2)
console.log(f)

// using array and fuction so not to creat separate code for same condition


let birthyear3 = [2000,1996,1854,2004,1984,1991]
let names = ['kiran','karan','abhijit','kunal','suraj']

function printArray(arr,fn) {  
    let newArr = []

    for (let i = 0; i< arr.length;i++){
        newArr.push(fn(arr[i]))
    }
    return newArr
}

let greeting = function (el) {
    return `welcome ${el}`
    
}
console.log(printArray(names,greeting))

let age = function (el) {
    return 2021 - el    
}
console.log(printArray(birthyear3,age))

let yr10 = function(el){
    return el + 10
}
console.log(printArray(birthyear3,yr10))

let revNamesStr = function(el) {
    let revStr = []
     for (i=el.length-1;i>=0; i--){

        revStr += el[i]
        
     }
     return revStr
    
}
console.log(printArray(names,revNamesStr))


//-----------------odd one to reverse
// let revArray = function (el){
    
//     let revNames = []
//     for (let i = el.length-1; i >= 0; i--){
//         revNames.push(el[i])
//     }
//     return revNames
// }
// console.log(printArray(names,revArray))






let namesd = ['kiran','karan','abhijit','kunal','suraj']

let revNames = []
for (i = namesd.length-1; i>=0;i--){

    //console.log(namesd[i])
    revNames.push(namesd[i])
}
console.log(revNames)



// OOPS concept============inheritance approch+
// Lexical scope......child element can access the properties and method of parent element 

let addA = function(x,y) {

    console.log(x+y)
    let h = 10
    let v = 20

    //console.log(j+d)

    addB()
    function addB() {
        let j =100
        let d = 200
        
        console.log(j+d)
        console.log(h+v)


    addC()
    function addC() {
        console.log(j+d+v+h)
        
    }
    }
    
}

addA(12,13)
