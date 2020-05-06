/* Main javascript file */

/* Navigation javascript */

var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('nav-links li');
var colNavRight = document.querySelector('.col-nav-right');
var address = document.querySelector('div.address-container')
var heroButton = document.querySelector('.hero-button');
var menuCircle = document.querySelector('#menu-circle');

hamburger.addEventListener('click', () => {
   navLinks.classList.toggle("open");
   hamburger.classList.toggle("open")
   colNavRight.classList.toggle("links-open")
   address.classList.toggle("links-open")
   address.classList.toggle("closed_menu")
   menuCircle.classList.toggle("open")

});

document.querySelectorAll('.menu-li').forEach(item => {
   item.addEventListener('click', event => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("open")
      colNavRight.classList.toggle("links-open")
      address.classList.toggle("links-open")
      address.classList.toggle("closed_menu")
      menuCircle.classList.toggle("open")
   })
})