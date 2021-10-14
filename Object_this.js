
console.log(this)  //{}

let counter = {
    count: 0,
    next: function () {
        console.log(this)
        return this.count = this.count + 1
    }
}

let p = counter.next()
console.log(p)

// alert('Hello')
// window.alert("Kiran")


// function movie() {
//     console.log(this === window)
// }
// movie()

// window.movie()

// this keyword outside the block shows the window on browser & null object {} on JS 
//inside the block this keyword shows the current calling object.


let bike = {
    brand: 'KTM',
    getbrand: function () {
        return this.brand
    }
}

let bike2 = {
    brand: 'Hero',
}

console.log(bike.getbrand())

let n = bike.getbrand.bind(bike2)
console.log(n())
console.log('---------------------------------------------------------------------------------------')
// bind is used for to get new object ....that mean assign the value to this keyword

// Call & apply

//var brand = "default"

function getCompany(Amazon) {
    console.log(Amazon + this.brand)
}
// getCompany('Hi this is ')

let Audi = {
    brand: "Audi"
}

let BMW = {
    brand: "BMW"
}

// getCompany.call(BMW, 'This is new ')
// getCompany.call(Audi, 'I Love ')

// getCompany.apply(BMW, ['this is new '])
// getCompany.apply(Audi, ['I love '])

 console.log('---------------------------------------------------------------------------------------')

    // call & apply are mostly used for assign the value for this keyword....u can assigns the arguments as well as for this function 


//15/09/2021---------this inside the function of fuction & arrow Functions

let na = function(a,b){
    return  a + this.brand 
}


console.log(na.call(Audi,'New Brand ','Have Stylish brand '))

// let Y =['New Brand ','Have Stylish brand ']
// let naa = function(arr){
//     return  arr + this.brand
// }


// console.log(naa.apply(Audi,[...Y]))

// let Y =['New Brand ','Have Stylish brand ']
let naa = function(k,m){                                          // using destructing of array
    return  k + this.brand + m + this.brand
}


console.log(naa.apply(Audi,[...['New Brand ',' Have Stylish brand ']]))





// console.log('---------------------------------------------------------------------------------------')

// let g = {
//     nam:"Kiran",
//     age: 25,
//     display: function(){
//         console.log('Welcome' + this.nam)  // Kiran
//         function greet(){
//             console.log("Great" + this.nam)  //undefined
//         }
//         greet()
//     }

// }
// g.display()

// let ga = {
//     nam:"Kiran",
//     age: 25,
//     display: function(){
//         console.log('Welcome' + this.nam)  // Kiran
//         let  greet = ()=>{
//             console.log("Great" + this.nam)  //Kiran
//         }
//         greet()
//     }

// }
// ga.display()

// // arrow function inside the function of function gives the value to this keyword is parent element

// console.log('---------------------------------------------------------------------------------------')
// var nam = "Suraj"

// let gab = {
//     nam:"Kiran",
//     age: 25,
//     display: () =>{
//         console.log('Welcome' + this.nam)  // Suraj -----------------this show on browser....in terminal undefined
//         let  greet = ()=>{
//             console.log("Great" + this.nam)  // Suraj
//         }
//         greet()
//     }

// }
// gab.display()

