let form= document.querySelector("form");
let name= form.querySelector("div #name");
let email= form.querySelector("div #email");
let password= form.querySelector("div #password");





form.addEventListener("submit",formHandler)

function formHandler(e){
e.preventDefault();

var link= document.createElement("a");
var text= document.createTextNode("Here! CLick ME!")
link.appendChild(text);

link.title="Here! CLick ME!"

link.href="https://nahian2005.github.io/Nothing/";


link.style.textDecoration="none";
link.style.fontSize="12rem";
link.style.color="#fff";


document.body.appendChild(link); 











}

