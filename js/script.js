const hamburguerIcon = document.querySelector(".hamburguer-icon");

const closeIcon = document.querySelector(".close-icon");

const ulMenu = document.querySelector(".ul-menu");
const menuContainer = document.querySelector(".menu-container");

hamburguerIcon.addEventListener('click', ()=>{
     ulMenu.classList.toggle("translationHide");
     closeIcon.classList.add("show");
     hamburguerIcon.classList.add("hide");
     hamburguerIcon.classList.remove("show");
} 
 );

 closeIcon.addEventListener('click', ()=>{
    ulMenu.classList.toggle("translationHide");
    hamburguerIcon.classList.add("show");
    closeIcon.classList.add("hide");
    closeIcon.classList.remove("show");

} 
);