const left = document.querySelector('.left');
const right = document.querySelector('.right');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const galary = document.querySelector('.galary');

const tl = new TimelineMax();
tl.fromTo(left, 3, {x: "-100%" }, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(right, 3, {x: "-100%" }, {x: "0%", ease: Power2.easeInOut}, "-=2")
.fromTo(logo, 0.5, {opacity: 0, y: -30}, {opacity: 1, y: 0}, "-=2")
.fromTo(galary, 3, {x: "-100%" }, {x: "0%", ease: Power2.easeInOut}, "-=2");



