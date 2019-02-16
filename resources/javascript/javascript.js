$(document).ready(function() {
  // slick slideshow for gallery page

  $(".image-container-slick").slick({
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: "linear",
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
// Animate on scroll  /////////////////

var $animation_elements = $(".animation-element");
var $window = $(window);

$window.on("scroll", check_if_in_view);

$window.trigger("scroll");

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("in-view");
    } else {
      $element.removeClass("in-view");
    }
  });
}

// open and close menu items when menu is clicked 

document.addEventListener("DOMContentLoaded", function(event) {
  var menu = document.querySelector("#menu");
  var menuItems = document.querySelector(".menu-items");
  var text = document.querySelector(".hero-text");

  menu.addEventListener("click", function() {
    if (menuItems.classList.contains("open")) {
      menuItems.classList.remove("open");
      text.classList.remove("open");
    } else {
      menuItems.classList.add("open");
      text.classList.add("open");
    }
  });
});
