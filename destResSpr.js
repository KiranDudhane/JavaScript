
// let kiran = {

//     name: "Kiran",
//     age: 25,
//     rollNo: 456,
//     family:{
//         father:"Sunil",
//         mother:"Sharada"
//     },
//     skills:['JavaScript','python','HTML','CSS']
// }

// //retrive values
// //dot and bracket notation

// console.log(kiran.age)
// console.log(kiran['rollNo'])

// //update

// kiran.skills.push('Java')
// console.log(kiran.skills)

// //add new property
// kiran.MobNo = 8551983608
// console.log(kiran)

// //delete 

// delete kiran.MobNo
// console.log(kiran)

// ----------------------------------------------------------------->

// let kiran = {

//     name: "Kiran",
//     age: 25,
//     rollNo: 456,
//     family: {
//         father: "Sunil",
//         mother: "Sharada"
//     },
//     skills: ['JavaScript', 'python', 'HTML', 'CSS']
// }

// // let age= kiran.age
// // console.log(age)

// let skillleth = kiran.skills.length

// console.log(skillleth)

// let sagar = {
//     fullName: "Sagar Dudhane",
//     age: 29,
//     rollNo: 159
// }

// let { fullName, age, rollNo } = sagar        // destructing of object

// console.log(fullName, age, rollNo)
// console.log(sagar)

// // custome name
// let { fullName: fn, age: ag, rollNo: rn } = sagar       // we can custome the property name

// console.log(fn, ag, rn)

// let company = {
//     Name: "Minskole",
//     docs: 'monthlyDoc',
//     pages: 2,
//     total: 12,
//     per_page: 6,
//     total_page: 2,
//     data :[
//         {
//             "id": 7,
//             "email": "michael.lawson@reqres.in",
//             "first_name": "Michael",
//             "last_name": "Lawson",
//             "avatar": "https://reqres.in/img/faces/7-image.jpg"
//         },
//         {
//             "id": 8,
//             "email": "lindsay.ferguson@reqres.in",
//             "first_name": "Lindsay",
//             "last_name": "Ferguson",
//             "avatar": "https://reqres.in/img/faces/8-image.jpg"
//         },
//         {
//             "id": 9,
//             "email": "tobias.funke@reqres.in",
//             "first_name": "Tobias",
//             "last_name": "Funke",
//             "avatar": "https://reqres.in/img/faces/9-image.jpg"
//         },
//         {
//             "id": 10,
//             "email": "byron.fields@reqres.in",
//             "first_name": "Byron",
//             "last_name": "Fields",
//             "avatar": "https://reqres.in/img/faces/10-image.jpg"
//         },
//         {
//             "id": 11,
//             "email": "george.edwards@reqres.in",
//             "first_name": "George",
//             "last_name": "Edwards",
//             "avatar": "https://reqres.in/img/faces/11-image.jpg"
//         },
//         {
//             "id": 12,
//             "email": "rachel.howell@reqres.in",
//             "first_name": "Rachel",
//             "last_name": "Howell",
//             "avatar": "https://reqres.in/img/faces/12-image.jpg"
//         }
//     ]

// }

// let {Name:nm,docs:dc,pages:pg,total:tl,per_page:prpg,total_page:tlpgs} = company

// console.log(nm)

// let {data:[emp1={id,email,first_name,last_name },
//             emp2={id,email,first_name,last_name }

// ]} = company

// console.log(emp1.first_name,emp1.avatar)
// console.log(emp2.first_name)
// console.log(emp1.email)

// console.log(company.data[1].first_name)

// let num = [1,2,3,4,5,6]

// let [a,b,c,d] = num

// console.log(d)

//nested object

let maya = {
    namea : 'maya',
    age: 23,
    city:"pune",
    author:{
        nameb:'surya',
        value:789
    }
}

let {namea,age,city,author:{nameb,value}} = maya

console.log(namea,nameb,value)

//array destructuring

let kiran = {

    name: "Kiran",
    age: 25,
    rollNo: 456,
    family: {
        father: "Sunil",
        mother: "Sharada"
    },
    skills: ['JavaScript', 'python', 'HTML', 'CSS']
    
}

let {name:nma,age:ag,rollNo:rn,family:{father,mother},skills:[sk1,sk2,sk3,sk4]} = kiran

console.log(nma,father,mother,sk2,sk3)

// abhisha = {
//     id:1,
//     title:'My story',
//     fullName:"abhisha ",
//     skills:["python","java","javscript"]
// }

// let {id:k,title:t,skills:[aa,bb]}= abhisha
// console.log(k,t,aa,bb)

//--------------------------------------------------------->

let arr = [1,7,89,[2,69],52,45]

let [v,w,x,[y,z],p,q] = arr

console.log(w,y,q)

console.log(arr[3][arr[3].length-1])    //fatch last num for inside array

//--------------------------------------------------------->

let names= ['kiran','tushar','suraj','tejal',{firstName:"Mayuri",lastName:"Dudhane"}]

let [a,b,c,d,{firstName,lastName}] = names

console.log(firstName)
console.log(lastName)
console.log('------------------------------------------------>')

//--------------------------------------------------------->
//Spread Operator

let nums = [1,2,3,4,5,6,7,8,9]

function add(a,b,c,d,e) {
    return a+b+c+d+e
}

let j = add(nums[0],nums[1],nums[2],nums[3],nums[4])
console.log(j)

let ja = add(...nums)
console.log(ja)

let trasactions = [500,-100,250,-300,1000,-240,-700,5000]

function firstFivetrasa(u,v,w,x,y) {
    return Math.abs(u)+Math.abs(v)+Math.abs(w)+Math.abs(x)+Math.abs(y)
}

let k = firstFivetrasa(...trasactions)

console.log(k)

console.log(trasactions.reduce((acc,el)=>acc+el))


//rest operator

function adda(...arr) {
    return arr.reduce((acc,el)=> acc+el)   
}
 let n= adda(1,2,3,4,5,6,7,8,9)
console.log(n)

function addb(x,...arr) {
    console.log(arr.slice(0,x))   // for 1st 4 value
    console.log(arr.slice(-x))    // for last 4 value
}

addb(4,'kiran','mayuri','sagar','tejal','tushar','ram')

let [aa,...nn] = [77,88,99,44,55,66]
console.log(nn[0])


let kk = [88,55,22,33,4]
let jjj = [4,8,6,7,9,54]

let zz = [...kk,...jjj]    // for join the array
console.log(zz)

// spred operator with object

Oone = {
    namee : 'Kiran',
    empNo: 4785,
    dept:'automation'
}

let {namee,empNo,dept} = Oone
console.log(namee,empNo,dept)

// rest operator with object

let {nameee,...ccc} = Oone

// console.log(nameee)
console.log(ccc)

console.log(empNo)

console.log()

function adde(...d) {
    console.log(d)
}
 adde(4,7,8,65,69)    // [ 4, 7, 8, 65, 69 ]

let dd = {rn:7848,ag:85}
let ee = {clr:'red',mod:'active'}

console.log({...dd,...ee})

// spread operator with string

console.log(..."kiran")   // separate out char
console.log([..."kiran"])   // separate out char in array

let [mn,nb,...sd] = [...'Dudhane']

console.log(mn)
console.log(nb)
console.log(sd)

console.log(sd.join(''))

console.log('------------------------------------>')

let gh = [1,2,3]

let hi = gh
gh[0] = 100     // change for both set

console.log(gh)
console.log(hi)

let kl = [...gh]

kl[0] = 200

console.log(kl)   // only update specific value
console.log(gh)

//same for object

let er = {df:78,ty:65}

let yu = er

er.ty = 896
console.log(yu)
console.log(er)


let io = {...er}

io.df = 21345
console.log(io)
console.log(er)

let dfa = [1,23,4]
let ggggg = [...dfa]
// for(let i = 0 ; i < dfa.length ; i++){
//     ggggg.push(dfa[i])
// }
console.log(ggggg)
// console.log(dfa)


