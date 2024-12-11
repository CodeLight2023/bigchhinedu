(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();

    // Testimonials carousel
    $(".reviews-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

var sideBar = document.querySelector('header .sidebar'),
    modeBtn = document.querySelector('header .menu .menu-btn .bi-sun'),
	 body = document.body,
	 darkMode = localStorage.getItem('dark-mode'),
    preloader = document.querySelector('.preloader');


window.addEventListener('load', function() {
    preloader.classList.add('fade-out-animation');

    preloader.addEventListener("transitionend", () =>{
        document.body.removeChild(document.querySelector(".preloader"));
    });
});
document.querySelector('header .menu .menu-btn .bi-list').addEventListener('click', () => {
	sideBar.classList.toggle('active');
	document.querySelector('header .menu .menu-btn .bi-list').classList.toggle('bi-x-lg');
});

const enableDarkMode = () =>{
   modeBtn.classList.replace('bi-sun', 'bi-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   modeBtn.classList.replace('bi-moon', 'bi-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

modeBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}