
// !@@@@@@@@@@@@@@@@@@@@@@@@@@ NavBar scroll @@@@@@@@@@@@@@@@@@@@@@@@@@
window.addEventListener("scroll",()=>{
    document.querySelector("nav").classList.toggle("window-scroll",window.scrollY>0);
})

// !@@@@@@@@@@@@@@@@@@@@@@@@@@ Tablet Navbar @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//* Gernal styling of the menu
const opneMenuButton=document.querySelector("nav .open-menu-button");
const closeMenuButton=document.querySelector("nav .close-menu-button");
const navMenu=document.querySelector("nav .nav__menu");
const liItems=document.querySelectorAll(".nav__menu li");
//* opening the mune
opneMenuButton.addEventListener("click",()=>{
 opneMenuButton.style.display="none";
navMenu.style.display="flex";
closeMenuButton.style.display="block";
})
//* closing the menu
closeMenuButton.addEventListener("click",()=>{
    closeMenuButton.style.display="none";
    navMenu.style.display="none";
    opneMenuButton.style.display="block";

    // animation for the closing menu 
    //*  liItems.forEach((liItem)=>{
    //*      liItem.classList.toggle('closing-menu-style');
    //*  });


    });


//? animating the closing navbar



// !@@@@@@@@@@@@@@@@@@@@@@@@@@ Q/A @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

const faqs=document.querySelectorAll(".faq");


faqs.forEach((faq)=>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('faq__open');
    });
    });

 // * toggle the plus and minus icons
 const icons=document.querySelectorAll('.faq__icon i');

 icons.forEach((icon)=>{
     icon.addEventListener('click',()=>{
         icon.classList.toggle('fa-plus');
         icon.classList.toggle('fa-minus');
         
     });
 
     });
 // * toggle plus and minus ends here
 



// !@@@@@@@@@@@@@@@@@@@@@@@@@@ Q/A @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },

    // breakpoint for the mobile and the desktop
    breakpoints: {
        800: {
            slidesPerView: 2,
        }
    }

});



