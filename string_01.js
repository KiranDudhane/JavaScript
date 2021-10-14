
// 02/08/2021 ---8pm---- String 1st lecture
// Data types : numbers, string, array, boolean, object

let fullname = "Kiran"

for (let i = 0; i < fullname.length; i++){
    console.log(fullname[i])
}

console.log("------------------------------------------------------------------------------------------------")


for (let i = fullname.length-1; i>= 0 ; i--){
    console.log(fullname[i])
}


// concatination & interpolation

let Fristname = "Kiran"

console.log('My Frist name is' + " " +Fristname) //----------old method

console.log(`My Frist name is ${Fristname}`)  //---------------output always string -------------vvvvvip------------

console.log("-----------------------------------------------------------------------------------------------------------")

//Conversion in strings

let Fstname = "rahul"
let age = 25
let id = 48

console.log(Fstname+age+id)   //-----------rahul2548----string+num = string
console.log(age+id+Fstname)   //------------73rahul-----num+num = Num
console.log(age+Fstname+id)   //------------25rahul48----num+string = string

let name1 = "Dudhane"

//'''''''''''''''''''''''upperCase()''''lowerCase()'''''''''''''''''''''''''''''''''

let upper = name1.toUpperCase()
console.log(upper)

let lower = name1.toLocaleLowerCase()
console.log(lower)

let mix = name1.toLocaleLowerCase().toUpperCase().length  //----------o/p is string so we can apply methods
console.log(mix)

//'''''''''''''''''''''''startwith()''''endWith()'''''''''''''''''''''''''''''''''

console.log(name1.startsWith('D'))     //o/p boolean
console.log(name1.endsWith('b'))

//'''''''''''''''''''''''includes()'''''''''''''''''''''''''''''''''

console.log(name1.includes('dh'))
console.log(name1.includes('de'))   //'''''''''need corrousponding element

//'''''''''''''''''''''''slice()'''''''''''''''''''''''''''''''''

console.log(name1.slice(2,6))  //''''''''''''''last ele not included----------------
console.log(name1.slice(-4,-1))    //...........works on negative no,,,,,,reverse numbering

      // note starting position should be before ending position in Index...............for slice()'''''''''''''''''''


//'''''''''''''''''''''''substring()'''''''''''''''''''''''''''''''''

let abc = " Riddhi Siddhi Sankul "

console.log(abc.substring(4,10))   //'''''''''''''''last index not include''''''''''''''
console.log(abc.substring(-1,10))   //''''''''''''need to research''''''''''unknown o/p''''''''''''''''''

//'''''''''''''''''''''''substring()'''''''''''''''''''''''''''''''''

console.log(abc.substr(1,8))    

//'''''''''''''''''''''''trim()'''''''''''''''''''''''''''''''''

console.log(abc.trim().length)    //to remove void paces at start nd end

console.log(abc.trimRight().length)

console.log(abc.trimLeft().length)



//'''''''''''''''''''''''replace()'''''''''''''''''''''''''''''''''

console.log(abc.replace('Sankul','Appartment'))    //replace or update in the string

console.log(abc.charAt(8))   //''''''''''char at that index place'''''''''''''''''''

console.log(abc.charCodeAt(8))    //''''''''''''''''ASCCI code value'''''''''''''


















