document.addEventListener("DOMContentLoaded", function() {

var header = document.querySelectorAll("#head"); // Links in header

/*----------  HAMBURGER  ----------*/
var hamburger = document.querySelector("#hamburger"), // Hamburger icon
    list = document.querySelector("#list"); // Navigation List

function hamburgerMenu() {
    hamburger.classList.toggle("header__button--used");
    list.classList.toggle("header__list--open");
}

hamburger.addEventListener("click", hamburgerMenu); //opening list and hamburger menu
list.addEventListener("click", hamburgerMenu); // closeing list after link was clicked


/*----------  Animated elements during scroll  ----------*/

var workLogo = document.querySelectorAll(".work__hiddenLeft, .work__hiddenRight, .work__article--hidden");

function showLogo () {
    for (i=0; i<workLogo.length; i++) {
        if(window.innerHeight - workLogo[i].getBoundingClientRect().top >= 0) {
            workLogo[i].classList.add("work__show");
        } 
    }
}

window.addEventListener("scroll", showLogo);


/*----------  Scrolling  ----------*/

var step, distance;
var distancePassed = 0;

function checkID(e) { // checking ID of element
    if (e.target.hasAttribute("href")) {
        e.preventDefault();

        var name = e.target.getAttribute("href"),
            item = document.querySelector(name),
            loc = Math.round(item.getBoundingClientRect().top);

        step = Math.round(loc/70);
        distance = Math.abs(loc);
        
        scrolling();
    }
}

function scrolling() {  // scrolling effect
    distancePassed += Math.abs(step);

    if(distancePassed >= distance){
        window.scrollBy(0 ,step);
        return distancePassed = 0;
    } else {
        window.scrollBy(0 ,step);
    }
    repeat = setTimeout(scrolling, 10);
}

header[0].addEventListener("click", checkID);


/*----------  Scroll to top button  ----------*/

var scrollTopButton = document.querySelector("#scrollTop");

scrollTopButton.addEventListener("click", function() { 
    var loc = Math.round(header[0].getBoundingClientRect().top);

    step = Math.round(loc/80);
    distance = Math.abs(loc);

    scrolling(); // using scroll efect
}); 

window.addEventListener("scroll", function(){ // SHOW/HIDE scroll to top button
    if(header[0].getBoundingClientRect().bottom < 0) {
        scrollTopButton.classList.remove("footer__scrollTop--hidden");
    } else {
        scrollTopButton.classList.add("footer__scrollTop--hidden");
    }
});


/*----------  Slider - twitter  ----------*/

var sliderContainer = document.querySelector("#slider"),
    slide = document.querySelectorAll(".twitter__slide"), //slides
    buttons = document.querySelectorAll(".twitter__buttons"), // dots under slider
    index = 0, //numer of slide
    fadeTimer, // "setTimeout" of fadeOut
    slideTimer; // "setTimeout" of changing slides

function slider() { // slider effect
    fadeIn();
    
    for(i=0; i< slide.length; i++){
        slide[i].classList.remove("twitter__slide--show");
        buttons[i].classList.remove("twitter__buttons--selected");
    }

    slide[index].classList.add("twitter__slide--show");
    buttons[index].classList.add("twitter__buttons--selected");

    if(index >= slide.length -1)
        index = 0;
    else
        index++;

    fadeTimer = setTimeout(fadeOut, 3100)
    slideTimer = setTimeout(slider, 4000);
}

window.addEventListener("load", slider);


/*----------  Slider buttons  ----------*/

var sliderButton = document.querySelectorAll("#button"); // dots under slider

function selectSlide(e) { // changing slide after click on dot
    if (e.target.hasAttribute("value")) {
        index = parseInt(e.target.value);
        e.target.classList.add("twitter__buttons--selected");
        clearTimeout(fadeTimer);
        clearTimeout(slideTimer);
        fadeNumber = 0;
        slider();
    }
}

sliderButton[0].addEventListener("click", selectSlide);

/* Fade effect */

var fadeNumber = 0;

function fadeIn() {
    fadeNumber += 0.1;
    if (fadeNumber >= 1) {
        return fadeNumber = 1;
    } else {
        sliderContainer.style.opacity = fadeNumber;
    }
    setTimeout(fadeIn, 60);
}

function fadeOut() {
    fadeNumber -= 0.1;
    if (fadeNumber <= 0) {
        return fadeNumber = 0;
    } else {
        sliderContainer.style.opacity = fadeNumber;
        setTimeout(fadeOut, 60);
    }
}

/* End of Fade effect */


});