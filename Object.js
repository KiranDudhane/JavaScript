let person = {
    FristName: 'Kiran',
    LastName: 'Dudhane',
    Age: 25,
    id: 655
}

// featching value from object
console.log(person.FristName)    //--------------do notation
console.log(person['Age'])    //--------------bracket.notation

//updating value from object
person.FristName = 'Suraj'
person['id'] = '750'

console.log(person)

// Adding property to object
person.language = 'Marathi'
person.Color = 'Fair'

console.log(person)


let person1 = {
    FristName: 'Kiran',
    LastName: 'Dudhane',
    Age: 25,
    id: 655,
    Height: '6 feet',
    weight: 70

}

for (let key in person1) {
    console.log(key, person1[key])
}            // dot notation not work in loops

delete person1.weight       //for delete some property
console.log(person1)

let j = [1, 2, 3, 4, 5]
function printArr(arr) {
    arr[0] = 56
    console.log(arr)
}
printArr(j)
console.log(j)

let persond = {
    namee: "chinmay",
    age: 34
}


function printObj(obj2) {
    obj2.namee = "chin"
    console.log(obj2)

}
console.log(persond)
printObj(persond)
console.log(persond)

console.log("----------------11/08/2021---------Object_Day2.Age--------------")

let students = [
    {
        fristName: 'Kiran',
        age: 26,
        Skills: ['Java', 'Python', 'C++', 'HTML']
    },

    {
        fristName: 'Tushar',
        age: 28,
        Skills: [ 'Python', 'C++', 'HTML']
    },

    {
        fristName: 'Mayuri',
        age: 27,
        Skills: ['Java', 'Python', 'C++', 'HTML']
    }

]

//'''''''''''''''''''Name with skills''''''''''''

for (let i=0; i < students.length; i++){
    console.log(`${students[i].fristName} :${students[i].Skills.length}` )
}

//''''''''''''''''Name the person with java Skills''''''''''''''''''''

for (let i=0; i < students.length; i++){
    if(students[i].Skills.includes('Java'))        //----------------use condition indexOf('Java')>0 as well
    console.log(`${students[i].fristName}`)
}

//''''''''''''''''AVG age of all students

let sum = 0
for (let i=0; i < students.length; i++){
    sum = sum + students[i].age
}
console.log(sum/students.length)

console.log('-------------------------------------------------------------------------------------------------------------')


let y= [1,2,3,34]

for(let i = 0; i< y.length; i++){

console.log(y[i])
}

//-----------------------------------------------ll------------------------------------------------

class Person {
    fulName = null
    age = null
    rollnumber = null
}

let kiran = new Person()

console.log(kiran)
kiran.age = 25,
kiran.rollnumber = 655
console.log(kiran)
kiran.language = 'Marathi'
console.log(kiran)