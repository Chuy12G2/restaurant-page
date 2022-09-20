import "./style.css"
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js"

const content = document.getElementById("content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

loadHome();

homeButton.addEventListener("click", () => {
    content.innerHTML = "";    
    loadHome();
})

menuButton.addEventListener("click", () =>{
    content.innerHTML = "";
    loadMenu();
})

contactButton.addEventListener("click", () =>{
    content.innerHTML = "";
    loadContact();
})

