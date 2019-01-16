$(document).ready(function(){

// slick slideshow for gallery page

$('.image-container-slick').slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: 'linear',
    accessibility: false,
    autoplay: true,
    autoplaySpeed: 7000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipe: false,
    touchMove: false,
  });


// lazy loading of images 

window.addEventListener("load", function(event) {
    lazyload();
});




});