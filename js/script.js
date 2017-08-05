// document.addEventListener("DOMContentLoaded", function() {


var hamburger = document.querySelector("#hamburger"), // hamburger icon
    list = document.querySelector("#list"); // Navigation list
    listItem = document.querySelectorAll("#list"); // Items of navigation list
    header = document.querySelector("#head"); // header
    scrollTopButton = document.querySelector("#scrollTop");

/*----------  HAMBURGER  ----------*/

function hamburgerMenu(e) {
    hamburger.classList.toggle("header__button--used");
    list.classList.toggle("header__list--open");
}

hamburger.addEventListener("click", hamburgerMenu);
listItem[0].addEventListener("click", hamburgerMenu);


/*----------  Scrolling  ----------*/

var step, distance;
var distancePassed = 0;

function checkID(e) {
    e.preventDefault();

    var name = e.target.getAttribute("href"),
        item = document.querySelector(name),
        loc = Math.round(item.getBoundingClientRect().top);

    step = Math.round(loc/80);
    distance = Math.abs(loc);
    
    scrolling();
}

function scrolling() {
    var repeat;
    distancePassed += Math.abs(step);

    if(distancePassed >= distance){
        window.scrollBy(0 ,step);
        clearTimeout(repeat);
        return distancePassed = 0;
    } else {
        window.scrollBy(0 ,step);
    }
    repeat = setTimeout(scrolling, 16);
}

listItem[0].addEventListener("click", checkID); // scrolling by click on navigation list


/*----------  Scroll to top button  ----------*/

scrollTopButton.addEventListener("click", function() { 
    var loc = Math.round(header.getBoundingClientRect().top);

    step = Math.round(loc/80);
    distance = Math.abs(loc);

    scrolling();
}); 

window.addEventListener("scroll", function(){
    if(header.getBoundingClientRect().bottom < 0) {
        scrollTopButton.classList.remove("footer__scrollTop--hidden");
    } else {
        scrollTopButton.classList.add("footer__scrollTop--hidden");
    }
});


/*----------  Slider - twitter  ----------*/

var sliders = document.querySelector("#slider"),
    slide = document.querySelectorAll(".twitter__slide"),
    buttons = document.querySelectorAll(".twitter__buttons"),
    index = 0,
    fadeTimer,
    slideTimer;

function slider() {
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

var sliderButton = document.querySelectorAll("#button");

function selectSlide(e) {
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
        sliders.style.opacity = fadeNumber;
    }
    setTimeout(fadeIn, 60);
}

function fadeOut() {
    fadeNumber -= 0.1;
    if (fadeNumber <= 0) {
        return fadeNumber = 0;
    } else {
        sliders.style.opacity = fadeNumber;
        setTimeout(fadeOut, 60);
    }
}

/* End of Fade effect */


// });