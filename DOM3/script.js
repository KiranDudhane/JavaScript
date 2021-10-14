
//document.querySelector()

let ol = document.querySelector('ol')
let listA = document.querySelectorAll('li')
let Button = document.querySelector('#Button')
let Input = document.querySelector('input')

    // InputText.textContent = InputText.value
    // InputText.style.color = InputText.value

for(let i= 0; i< listA.length;i++){
   // console.log(listA[i])
    CreateButton(listA[i])
}

ol.addEventListener('click',(B)=>{
    // console.log(B.target)             // this give the tagname of ele form given page

    if(B.target.tagName == "BUTTON"){
        if(B.target.classList == "remove"){
            let li = B.target.parentElement
            let ol = li.parentElement
            ol.removeChild(li)
        }

        if(B.target.classList == "up"){
            let li = B.target.parentElement
            let ol = li.parentElement
            let Previous = li.previousElementSibling
            if(Previous){
                ol.insertBefore(li,Previous)
            }
        }

        if(B.target.classList == "down"){
            let li = B.target.parentElement
            let ol = li.parentElement
            let nextSibling = li.nextElementSibling
            if(nextSibling){
                ol.insertBefore(nextSibling,li)
            }

        }
    }

})


Button.addEventListener('click',()=>{
    let newE = document.createElement('li')
    newE.textContent = Input.value
    
    ol.appendChild(newE)
    CreateButton(newE)
    newE.style.color = Input.value
    //  CreateButton(newE)
})


function CreateButton(li){

    let RevButton = document.createElement('button')
    RevButton.textContent = "Remove"
    RevButton.classList = "remove"
    li.appendChild(RevButton)

    let upButton = document.createElement('button')
    upButton.textContent = "Up"
    upButton.classList = "up"
    li.appendChild(upButton)

    let downButton = document.createElement('button')
    downButton.textContent = "Down"
    downButton.classList = "down"
    li.appendChild(downButton)

}