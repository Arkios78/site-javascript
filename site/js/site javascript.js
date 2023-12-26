"use strict";

const menu = document.querySelector(".menu")
const interactive = document.querySelector(".interactive")
let body=document.querySelector(".container");
const switcher =document.getElementById('switcher');
let fababy=document.querySelector(".box_fababy");
let georgio=document.querySelector(".box_georgio");
let stony=document.querySelector(".box_stony");
let jul=document.querySelector(".box_jul");
let footer=document.querySelector(".image2");

menu.addEventListener('click',()=>{
    interactive.classList.toggle('mobile-menu')
})



// body.style.background="white";
// body.style.color="black";
// fababy.style.background="lightblue";
// georgio.style.background="lightblue";
// stony.style.background="lightblue";
// jul.style.background="lightblue";
// footer.style.background="white";
// x=0;


switcher.addEventListener('click', () => {
    body.classList.toggle('light')
});
