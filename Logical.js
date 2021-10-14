// Prob 1 ---------------let rev = "hello i am rohan"-----------reverse the string in statements
// prob 2 ---------------Highest and lowest number from an array
// prob 3 ---------------CChinmayY— remove first and last chracter
// prob 4 ---------------Python.pdf..........seprateout the file extension
// ----------------------Script.js..........seprateout the file extension

//---------------------------------------Prob 1----------------------------------------------------

// let stringK = "Hello i am Kiran"
// let reve = stringK.split(' ')
// //console.log(reve)
// let n = []

// function reveString(a) {
//     revStr = ''
//     for (let i = 0; i < a.length; i++) {
//         revStr = a[i] + revStr
//     }
//     return revStr
// }

// for (let i = 0; i < reve.length; i++) {
//     n.push(reveString(reve[i])) 
// }
// console.log(n.join(" "))

//---------------------------------------Prob 2---------------------------------------------
// num = [5,45,9,-8,10,7]

// let max =[]
// let min =[]
// for (let i =0; i < num.length; i++){
//     if (num[i] > max){
//         max = num[i]
//     }
//     else if(num[i]< min){
//         min = num[i]
//     }
// }
// console.log(max)
// console.log(min)

//------------------------------Prob 3-----------------------------------------------

// let fristName = "PKiranY"
// let newName = ""

// let aa= ""
// for(let i = 1;i<fristName.length-1;i++){
//     aa = aa + fristName[i]
// }
// console.log(aa)

// for (let i =0; i< fristName.length; i++){
//     if(i != 0 && i != fristName.length-1){
//         newName = newName + fristName[i]
//     }
// }
// console.log(newName)

//----------------------Prob 4----------------------------------------------

// let doc = 'String.js'
// let newArray = doc.split('.')

// console.log(newArray[newArray.length-1])

//--------------|------------
//--------------|------------
//--------------|-----------
//--------------|-----------
//--------------|-----------
//--------------|-----------
//--------------|-----------
//--------------|-----------


//-----------------------HW Prob 1------------------
// --------------------prob 1--------------------------count the vowel from a given string

// let lastName = 'Kiran Dudhane'
// console.log(lastName.length)

// let vowel="aeiouAEIOU"
// let vcount = 0

// for(let i =0; i< lastName.length; i++){

//     // console.log(lastName[i])
//     if (vowel.includes(lastName[i])){
//         vcount = 1 + vcount
//     }
// }
// console.log(vcount)

//-----------------------HW Prob 2------------------
//-----prob 2 ------------------------- [[1,2,5],[4,6,-9],[100,-200,-300]]-------find highest and lowest no from given array

// let arrayk = [[1, 2, 5], [4, 6, -9], [100, -200, -300]]

// let maximumNum = []

// for (let i = 0; i < arrayk.length; i++) {

//     for (let j = 0; j < arrayk[i].length; j++) {

//         maximumNum.push(arrayk[i][j])
//     }

// }
// //console.log(maximumNum)

// let highestNum = 0
// let lowestNum = maximumNum[0]

// for (let k = 0; k < maximumNum.length; k++) {
//     if (maximumNum[k] > highestNum) {

//         highestNum = maximumNum[k]
//     }
//     else if (maximumNum[k] < lowestNum) {

//         lowestNum = maximumNum[k]
//     }

// }
// console.log(highestNum)
// console.log(lowestNum)


// let max = []       //========================== another code 1 ================
// let min = []
// for (let i = 0; i < arrayk.length; i++) {

//     arrayk[i].map(function (el, index, arr) {

//         if(el > max){
//            max = el
//        }
//        else if (el < min){
//            min = el
//        }
//     })

// }
// console.log(max)
// console.log(min)

//========================== another code 2 ================

// let high = 0
// let low = 0
// let nb = arrayk.flat().map(function(el,index,arr){
//     if (el > high){
//         high = el
//     }
//     else if (el < low){}
//         low = el
// })
// console.log(high,low)



//-----------------------HW Prob 3------------------
//prob 3 ------------------------- "I am new tp javascript and i wish to learn every concept of javascript . javascript is great"
//--------count the 'javascript' words




// let stringA = "I am new to javascript and i wish to learn every concept of javascript . javascript is great . Javascript is love"
// let stringArray = stringA.split(' ')
// //..................//console.log(stringArray)

// count = null
// for (let i=0; i < stringArray.length; i++){
//     if (stringArray[i].toLocaleLowerCase() == "javascript"){
//         count = count + 1
//     }
// }
// console.log(count)


//-----------------------HW Prob 4------------------

//prob 4 ------------------------- ["-1","Abhisha","poorva",0,"Chinmay"]----------start with no array / start with char array


// mixArray = [-1,"Kiran","Mayuri",0,"Dudhane",25]

// num = []
// char = []

// for (i= 0; i< mixArray.length;i++){

//     if (typeof mixArray[i] == 'number'){
//         num.push(mixArray[i])
//     }
//     else
//     char.push(mixArray[i])
// }
// //console.log(num)
// //console.log(char)

// num.sort(function(a,b){
//     return a-b
// })
// char.sort();

// let newArray = num.concat(char)

// console.log(newArray)


//-----------------------HW Prob 5------------------
// "4a3bc2"
// "aaaabbbcc"



 let userInput = "5d7r2v3z"

// let even = []
// let odd = []

// for (i = 0; i < userInput.length; i++) {

//     if (i % 2 == 0) {
//         even.push(userInput[i])
//     }
//     else {
//         odd.push(userInput[i])  
//     }
// }
// console.log(even, odd)

// let Newstring = ''

// for (let i = 0; i < even.length; i++) {
//     Newstring = Newstring + odd[i].repeat(Number(even[i]))
// }
// console.log(Newstring)

//-----------------------HW Prob 5  Other solution------------------


// let hk = userInput.split('')

// let gk=''

// for (let i=0; i< hk.length;i++){
//     if (Number(hk[i])){

//         gk = gk + hk[i+1].repeat(Number(hk[i]))

//     }
// }
// console.log(gk)


//-----------------------HW Prob 6------------------

// "aaaabbbcc"---->4a3b2c

// let userInput = 'aaaaabbbbcccddF'

// let count = 1
// let StringH = ''


// for (let i = 0; i < userInput.length; i++) {

//     if (userInput[i] === userInput[i + 1]) {
//         count = count + 1
//     }
//     else {
//         StringH = StringH + `${userInput[i]}${count}`
//         count = 1
//     }
// }
// console.log(StringH)

//---------------------------------HW Prob 7-----------------------------------
// 123---->321

// let numstring = '1234'

// let RevNum = ''

// for (i =numstring.length-1; i>=0; i--){
//     RevNum = RevNum + numstring[i]
// }
// console.log(RevNum)


//--------------|-------------------------
//--------------|-------------------------
//--------------|-------------------------
//--------------|-------------------------
//--------------|-------------------------
//--------------|-------------------------
//--------------|-------------------------
//--------------|-------------------------



//--------------------------------- Prob 01 25/08/2021 -----------------------------------
//'absdevsfrayjavgaabgdt'--------o/p object {a:count, b: Count,......}


// let userInput ="abcdeffedcbaaaddeeffbbaa"

// let CountChar ={}

// for (let i =0; i< userInput.length;i++){

//     if (CountChar.hasOwnProperty(userInput[i])){
//         CountChar[userInput[i]] = CountChar[userInput[i]] + 1
//     }
//     else{
//         CountChar[userInput[i]] = 1
//     }
// }
// console.log(CountChar)


// //--------------------------------- Prob 02 25/08/2021 -----------------------------------
// //'abs123de765vsf3452rayj22456avga732abgdt'--------o/p total alphbets and numbers counts

// let h = 'abs123de765vsf3452rayj22456avga732abgdt'

// let alp = 0
// let num = 0

// for (let i =0; i< h.length;i++){

//     if (Number(h[i])){
//         num = num + 1
//     }
//     else{
//         alp = alp + 1
//     }
// }
// console.log(`Total Nos= ${num}, Total Charactors= ${alp}`)


// //--------------------------------- Prob 03 25/08/2021 -----------------------------------
//'abs123d##e76@@@@5vs@#$%f3452r%$#@ayj22456a$#@vga$#732abgdt'--------o/p total alphbets, numbers and symbols counts

// let g = 'aabbccdd@@##$$%%12345678'

// let alpha = 0
// let numbers = 0
// let Symbols = 0

// for (let i=0;i< g.length;i++){

//     if (Number(g[i])){

//         numbers = numbers + 1
//     }
//     else if (g[i] >= 'a' && g[i] <= 'z' || g[i] >= 'A' && g[i] <= 'Z'){
//         alpha = alpha + 1
//     }
//     else{
//         Symbols= Symbols+1
//     }
// }
// console.log(`Alphabets = ${alpha},Numbers = ${numbers},symboles = ${Symbols}`)




//---------prob 31/08/2021-------------------------
//strg='kiran'----------make 1st char to capital---------------------------

let strg = 'kiran'

// let qq = strg[0].toLocaleUpperCase() + strg.slice(1)
// console.log(qq)

let char=''

for(i=0;i<strg.length;i++){

    if (i == 0){
        char = char + strg[i].toUpperCase()
    }
    else{
        char = char + strg[i]
    }
}
console.log(char)

//---------prob 01/09/2021-------------------------
//-------------remove the spaces in between strings---------------------------

let abc = " Riddhi Siddhi Sankul "

let updStr = abc.trim()

let newStrg = updStr.split(' ')

console.log(newStrg.join(''))

//---------prob 02/09/2021-------------------------
//-------------find the index of 3rd "m" in string---------------------------

let k = 'amomolmhh'
let j = []

for(let i = 0 ; i < k.length ; i++){
    if(k[i] == 'm'){
        j.push(i)
    }

}
console.log(j[2])

// console.log(k.indexOf('m',4))

// let r = k.indexOf('m',k.indexOf('m',k.indexOf('m')+1+1))

// console.log(r)

//---------prob 03/09/2021-------------------------
//-------------replace one word in string by another word---------------------------

let lan = "I am learning javascript and i will search job in javascript"

lan = lan.split(' ')
//console.log(lan)

for(let i = 0; i< lan.length; i++){
    if (lan[i] === 'javascript'){
        lan[i] = 'Python'
    }
}
console.log(lan.join(' '))









