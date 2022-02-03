const menu = document.querySelector(".menu");
const navCover = document.querySelector(".mobileNav");
const menuIcon = document.querySelector(".menuIcon");

menu.addEventListener("click", () =>{
    navCover.classList.toggle("openMobileNav");
    menuIcon.classList.toggle("fa fa-window-close")
})
