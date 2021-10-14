// 31/07/2021
// Array- Day One



// let x = 10
// console.log (x)

// let numone = 10
// console.log(numone)
// numone=300
// console.log(numone)


//  let names = ["Amol","Aviraj","karan","Kiran"]

// for (i=0; i<=names.length; i++) {
//     console.log(names[i])
// }
// //console.log(names[])

// console.log("----------------------------------------------------------------")



// let zd =(x,y)=> {
//     return x+y
// }
// let f= zd(10,20)
// console.log(f)


// names.shift("Pashya")
// console.log(names)

// let ab = names.indexOf("kiran")
// console.log(ab)
// if (names.indexOf("karan")>=0){
//     console.log("he is clever :-)")
// }
// else {
//     console.log("karan in not bad guy")
// }

// console.log("----------------------------------------------------------------")




// map method - action- operation will execute on each element of array
            //  return- Array


// let a = "strawberry"
// console.log(typeof a)


// let b = ["kiran", 67, true, "nothing", 62.8]  // mixed array

// let fruits = ["mango","Strawberry","Banana","grapes"]

// let ind = fruits.indexOf("Banana")
// console.log(fruits)
// console.log(ind)

// let userInput = "Banana"

// //console.log(userInput)

// for (let i=0; i<fruits.length;i++){

//   if (fruits[i] === userInput){
//   console.log("fruit is available")
//   break
// }
//   else{
//       console.log ("Fruit is not available")
//     }

// }

// let gr5 = fruits.filter(function(el,index,arr){
//     return el.length>5
// })
// console.log(gr5)



// let int = [12,16,20,89,79,49,50]

// let mod = int.map(function (el,index,arr){

//     return el%3
// })
// console.log(mod)


// console.log("---------------------------------------------------------------------------------")
// // 01/08/2021 8AM batch
// console.log("---------------------------------------------------------------------------------")




// let bills = [120,440,550,660,600]

// let ff = bills.map(function(el,index,arr){

//     return el + el * 0.10
// })
// console.log(ff)


// let h = bills.filter(function(el,index,arr){

//     return el > 500
// }).map(function(el,index,arr){
//     return el * 1.2
// }) 
// console.log(h)

// console.log("---------------------------------------------------------------------------------")


// // Method Reduce


// let no = [1,5,8,79,55,96]

// let sum = 0

// for (let i=0; i<no.length;i++){
//     //console.log(no[i])----------------// for separate out the outputs
//     sum= sum + no[i]
// }
// console.log(sum)


// let N = no.reduce (function(acc,el, index,arr){
//     return acc + el
// })
// console.log(N)


// let ad = ["Kiran", "Dudhane"]

// let = ap = ad.reduce(function (acc,el){
//     return acc + " " + el
// })
// console.log(ap)

// console.log("---------------------------------------------------------------------------------")



// let transiction = [100,-200,300,450,-500,700]
// // withdraw
// // deposite

// let withdraw = transiction.filter(function(el,index,arr){
//     return el < 0
// })
// console.log(withdraw)

// let deposite = transiction.filter(function(el,index,arr){
//     return el > 0
// })
// console.log(deposite)

// console.log("---------------------------------------------------------------------------------")

// // Object

// let person = {
//     fristname: "Kiran",
//     lastname: "Dudhane",
//     Age: 24,
//     ID: 44
// }

// // Value Fetch

// // dot Notation & Bracket Notation

// console.log(person.fristname)
// console.log(person['fristname'])

// console.log(person.Age)
// console.log(person['Age'])

// // updating value of object

// person.fristname = "Tushar"
// console.log(person)

// // add key & value in object

// person.language = "Hindi"
// console.log(person)

// // for multiple object info use loops
// // .dot notation does not oparate in loops

// for (let key in person){
//     console.log(key,person[key])
// }


console.log("---------------------------------------------------------------------------------")
// date-02/08/2021----------------5PM
// Array and object


// let students = [

//     {
//         fullName: "Kiran Dudhane",
//         RollNumber:25
//     },

//     {
//         fullName: "Tushar Dudhane",
//         RollNumber:52
//     },

//     {
//         fullName: "Mayuri Dudhane",
//         RollNumber:61
//     }

// ]

// console.log(students[0])
// let a = students[0]
// console.log(a.fullName)
// console.log(a.RollNumber)

// console.log(students[0]['fullName'])
// console.log(students[0]['RollNumber'])

// // find occurance

// let j = students.find(function(el,index,arr){

//     return el.fullName == "Kiran Dudhane"
// })
// console.log(j)

// let jh = students.find(function(el,index,arr){

//     if (index > 0)

//     return el.fullName == "Mayuri Dudhane"
// })
// // console.log(jh)

// let jha = students.find(function(el,index,arr){

//     if (index == students.length-1)

//     return el.RollNumber == 61
// })
// console.log(jha, "\n", jh)

// // every some

// let numbers = [1000,2000,15000,25000,56000,100000]

// let k = numbers.some(function(el,index,arr){
//     return el > 80000
// })
// console.log(k)

// let ka = numbers.every(function(el,index,arr){
//     return el > 50000
// })
// console.log(ka)

// // forEach

// let kab = numbers.forEach(function(el,index,arr){
//     return el / 100
// })
// console.log(kab)  //-----------------undefined

// // findIndex
// let ne = numbers.findIndex(function(el,index,arr){
//     return el == 25000
// })
// console.log(ne)

// // associativity operations.............// flat, sort, splice, concat, fill

// let u =[[1,2,3],[4,5,6]]

// let ne1 =u.flat()

// console.log(ne1)

 let v =[2,13,53,54,7,8]
// v.sort()
// console.log(v)

//console.log(v.slice(1,5))   //-----------NOt include last ele

// console.log(v.reverse())

//v.flatMap().....................//pending for explanation

// let ne3 = v.splice(2,4,100,200,300,400)   //-------------print array to show replace ele

// console.log(v)

// k = ['kiran','karan','abhi','pashya']
// let splicee = k.splice(1,2,"prati",'Snehal')
// console.log(k)

// let ne4 = v.fill(100,4,8)
// console.log(ne4)

// m = [10,20,30]
// n = [55,66,33]

// let ne5 = m.concat(n)
// let ne6 = n.concat(m)

// console.log(ne5, '\n', ne6)

// let ne7 = v.includes(80)
// console.log(ne7)

// k= ['kiran', 'Dudhane']
// let ne8 = k.join(' ')
// console.log(ne8)


// let Fruits = ['mango','banana','apple','strawberry']
// console.log(Fruits.sort())

// let v =[2,1,40,51,7,8]
// v.sort()
// console.log(v)

let markss = [54,12,1,2,3]
markss.sort()
console.log(markss)