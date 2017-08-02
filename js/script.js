document.addEventListener("DOMContentLoaded", function() {


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



});