export default function loadHome () {
    const content = document.getElementById("content");

    const nav = document.createElement("nav");
    const list = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li"); 
    const header = document.createElement("h1");
    const welcome = document.createElement("h2");
    const banner = document.createElement("div");
    const description = document.createElement("div");


    list.classList.add("nav-list"); 
    header.classList.add("header")
    welcome.classList.add("welcome");
    banner.classList.add("banner");
    description.classList.add("description")

    li1.textContent = "Home";
    li2.textContent = "Menu";
    li3.textContent = "Contact"; 

    header.textContent = "Mexican Restaurant";
    welcome.textContent = "welcome";
    description.textContent = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt nulla dolores officiis obcaecati, reiciendis asperiores ipsam saepe, dignissimos nesciunt dicta quos laudantium pariatur qui iusto earum dolorum aliquid perspiciatis iste! Lorem ipsum, dolor sit amet consectetur  adipisicing elit. Deserunt nulla dolores officiis obcaecati, reiciendis asperiores ipsam saepe, dignissimos nesciunt dicta quos laudantium pariatur qui iusto earum dolorum aliquid perspiciatis iste!`

    content.appendChild(nav);
    nav.appendChild(list);
    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);   

    content.appendChild(header);
    content.appendChild(welcome);
    content.appendChild(banner);
    content.appendChild(description);
    
}