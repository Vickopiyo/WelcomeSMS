let submitButton =document.getElementById("btn");
let input =document.getElementById("name")
let welcomeSMS=document.getElementById("greeting")

submitButton.addEventListener("click", function (e) {
    
    welcomeSMS.innerHTML= "Hello " + input.value + ", welcome to the bootcamp"
})