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
    swipe: true,
    arrows: false,
    touchMove: false,
  });


});

var menu = document.querySelector('#menu');
var menuItems = document.querySelector('ul');
var text = document.querySelector('.hero-text');


menu.addEventListener('click', function() {

  if (menuItems.classList.contains('open')) {
    menuItems.classList.remove('open');
    text.classList.remove("open");
  } else {
    menuItems.classList.add("open");
    text.classList.add('open')
  }


});