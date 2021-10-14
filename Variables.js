
// Let const var variable

//Prob 01
var a = 10
console.log(a)  // 10

//Prob 02..........var is function blocked type.....in black as well we outside of block get the value
{
    var b = 20
    console.log(b)  //20
}
console.log(b)  // 20

//Prob 03
let c = 25
console.log(c)  //25

//prob 04
{
    let d = 30
    console.log(d)  //30
}
//console.log(d)   // ''''''undefined d ---cause "Let" is blocked scope level

//Prob 05

const e = 35

//e= 40........cant update the value with variable const
console.log(e)  //35

//prob 06
{
    const f = 40
    console.log(f)  //40
}
//console.log(f)   // ''''''undefined d ---cause "const" is blocked scope level

//prob 07

let g = 45
{
    let g = 50
    console.log(g)  //50
}
console.log(g)  //45   ''''''''''this is outside the block so he find the value outside and get it and cant update the value with inside value

//prob 07

let h = 55
{
    h = 60
    console.log(h)  // 60
}
console.log(h)  // 60 updated value printed

//Prob 08

const i = 65
{
    const i = 70
    console.log(i)  // 70
}
console.log(i)  // 65  ..........Const and Let same logic

console.log('-------------------------------------------------------------------------------')

//Prob 09

var j = 75
function addA(){
    j = 80
    console.log(j) // 80  (2)
}
console.log(j) //75  (1)------execute from here 1st
addA()
console.log(j)  //80 (3)

console.log('---------------------------------------------------------------')
//Prob 10

var k = 85
function addB(){
    var k = 90
    console.log(k) // 90  (2)
}
console.log(k) // 85 (1)
addB()
console.log(k)  // 85  (3)

console.log('-------------------------------------------------------------')
//prob 11

let l = 400
var m = 10
function add() {

    let l = 30
    m = 30
    console.log(l) // 30 
    {
        let l = 45
        console.log(l)  // 45
    }
    l = 75
    {
        console.log(l)  // 75
    }

}
console.log(m)  // 10
add()
console.log(l)  // 400