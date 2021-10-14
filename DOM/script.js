// by using java script we can make the website dynamic
// to use for add delete change property based on user action

// for add element
document.write('<P>I am JavaScript</p>')

listA = document.querySelectorAll("p")
console.log(listA)

for (let i = 0 ; i < listA.length ; i ++){
    listA[i].style.color = "red"
    listA[i].textContent = 'Hello World'    
}


//  test - HTML, design - JSS, Dynamic on user interfair - JS


