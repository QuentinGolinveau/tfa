"use strict";
let lightmodeBtn = document.querySelector('.lightmode');
let activeMode = localStorage.getItem("mode");
if(activeMode == "dark"){
    document.body.classList.add("dark");
}
lightmodeBtn.addEventListener("click", (e) =>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    } 
});
let ajd = new Date();
let year = ajd.getFullYear();
let copyright = document.querySelector(".liste-compl__el--copyright");
copyright.innerHTML = "©"+ year