export default function loadMenu(){
    const content = document.getElementById("content");

    const nav = document.createElement("nav");
    const list = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li"); 
    const header = document.createElement("h1");
    const banner = document.createElement("div");
    const dishes = document.createElement("div");
    
    const dish1 = document.createElement("div");
    const imageDish1 = document.createElement("div");
    const paraDish1 = document.createElement("p");

    const dish2 = document.createElement("div");
    const imageDish2 = document.createElement("div");
    const paraDish2 = document.createElement("p");

    const dish3 = document.createElement("div");
    const imageDish3 = document.createElement("div");
    const paraDish3 = document.createElement("p");

    const dish4 = document.createElement("div");
    const imageDish4 = document.createElement("div");
    const paraDish4 = document.createElement("p");

    dish1.appendChild(imageDish1);
    dish1.appendChild(paraDish1);
    dish2.appendChild(imageDish2);
    dish2.appendChild(paraDish2);
    dish3.appendChild(imageDish3);
    dish3.appendChild(paraDish3);
    dish4.appendChild(imageDish4);
    dish4.appendChild(paraDish4);

    dishes.appendChild(dish1);
    dishes.appendChild(dish2);
    dishes.appendChild(dish3);
    dishes.appendChild(dish4);
    

    imageDish1.classList.add("image-dish");
    imageDish2.classList.add("image-dish");
    imageDish3.classList.add("image-dish");
    imageDish4.classList.add("image-dish");

    list.classList.add("nav-list"); 
    header.classList.add("header")
    banner.classList.add("banner-menu");
    dishes.classList.add("dishes");

    paraDish1.textContent = "dish1";
    paraDish2.textContent = "dish1";
    paraDish3.textContent = "dish1";
    paraDish4.textContent = "dish1";

    li1.textContent = "Home";
    li2.textContent = "Menu";
    li3.textContent = "Contact"; 

    header.textContent = "Menu";
    
    content.appendChild(nav);
    nav.appendChild(list);
    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);   

    content.appendChild(banner);
    content.appendChild(header);
    content.appendChild(dishes);

}