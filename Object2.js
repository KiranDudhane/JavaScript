class Person {
    FullName = null
    age = null
    RollNo = null

}

//'''''''setting the property outside the class'''''''''''''

let kiran = new Person()
kiran.age = 26
kiran.FullName = 'Kiran Dudhane'
kiran.RollNo = 655

console.log(kiran)

//''''''''''''setting the properies using the function'''''''''''''''''''''

class Person1 {
    FullName = null
    age = null
    RollNo = null


    setAge(a) {
        this.age = a
    }

    setRollNo(Roll) {
        this.RollNo = Roll
    }

    setfull(fullname) {
        this.FullName = fullname
    }

}
let Tushar = new Person1()
Tushar.setAge(26)
//console.log(Tushar)

let Mayuri = new Person1()
Mayuri.setAge(24)
Mayuri.setRollNo(2618)
Mayuri.setfull('Mayuri Dudhane')

console.log(Mayuri)

//''''''''''''setting the properies using the constructor'''''''''''''''''''''

class Person2 {
    constructor(fullName, Age, RollN) {
        this.fname = fullName,
            this.agee = Age,
            this.rolls = RollN

    }
}

let Sagar = new Person2('Sagar Dudhane', 26, 655)
let Tejal = new Person2('Tejal Dudhane', 16, 1020)
let Suraj = new Person2('Suraj Dudhane', 18, 544)
//console.log(Sagar)

let students = [Sagar, Tejal, Suraj]

let sum = 0

for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].agee
}
console.log(sum / students.length)


//constructor in detail----------19/08/2021

// // If there is no constructor at child level , by default parenet constructor will be 
// // called and we need to pass arguments

class Grandfather {
    constructor(gname, lastname, age) {
        this.gname = gname,
            this.lastname = lastname,
            this.age = age
    }

    displayName() {
        console.log(`My name is ${this.gname} & My age is ${this.age}`)
    }
}

class Father extends Grandfather {
    constructor(gname,lastname,age,fname,fage){
        super(gname,lastname,age)
        this.fname = fname,
        this.fage = fage
    }
    displayName() {
        console.log(`My name is ${this.fname} ${this.lastname} & My age is ${this.fage}`)
       }
}

class Son extends Father {
    constructor(gname,lastname,age,fname,fage,sname,sage){
    super(gname,lastname,age,fname,fage)
    this.sname = sname,
    this.sage = sage
    }
    displayName() {
    console.log(`My name is ${this.sname} ${this.lastname}, My father name is ${this.fname} & my grandfather name is ${this.gname} ${this.lastname} `)
    }
}

// let Narayan = new Grandfather('Narayan','Dudhane','75')
// Narayan.displayName()
// let sunil = new Father ('Narayn','Dudhane',75,'Sunil',52)
// sunil.displayName()
let Kiran = new Son ('Narayan','Dudhane',75,'Sunil',52,'Kiran','25')
Kiran.displayName()
