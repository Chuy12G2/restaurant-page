export default function loadContact(){
    const header = document.createElement("h1");
    const banner = document.createElement("div");
    const paraEmail = document.createElement("p");
    const paraPhone = document.createElement("p");


    header.classList.add("header")
    banner.classList.add("banner-menu");
    
    paraEmail.classList.add("para-contact");
    paraPhone.classList.add("para-contact");

    header.textContent = "Contact Us!"
    paraEmail.textContent = "Email: mexicanrestaurant@gmail.com";
    paraPhone.textContent = "Phone: 222-333-444 "

    content.appendChild(banner);
    content.appendChild(header);
    content.appendChild(paraEmail);
    content.appendChild(paraPhone);
}