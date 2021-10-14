
// id ,class attribute ,tagName

// id unique  ---> one element one 
// class ---->  multiple elements same properties

let headingOne = document.querySelector('h1')
let ele = document.querySelector('#newId')
console.log(ele)

let ele2 = document.querySelector('.newClass')
console.log(ele2)

//tagName[attribute="value"]

let Button = document.querySelector('button[name="AddColour"]')
console.log(Button)

let InputText = document.querySelector('input[type="text"]')
console.log(InputText)

Button.addEventListener('click', ()=>{

    InputText.textContent = InputText.value
    InputText.style.color = InputText.value

})

console.log(headingOne.textContent)
console.log(headingOne['textContent'])






