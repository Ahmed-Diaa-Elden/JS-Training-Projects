// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const ul = document.querySelector(".links");

navToggle.addEventListener('click',(e)=>{
  ul.classList.toggle('show-links');
})