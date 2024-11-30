
let circle =document.getElementById('circle')

let red=document.getElementById('red')
let green=document.getElementById('green')
let blue= document.getElementById('blue')
let reset= document.getElementById('reset')
let input= document.getElementById('colour')


red.addEventListener("click",()=>{
     circle.style.backgroundColor= 'red';
})
green.addEventListener("click",()=>{
    circle.style.backgroundColor='green'
})
blue.addEventListener("click",()=>{
    circle.style.backgroundColor='blue'
})

reset.addEventListener("click",()=>{
    circle.style.backgroundColor=''
})

input.addEventListener("change",()=>{
    circle.style.backgroundColor= input.value
})
