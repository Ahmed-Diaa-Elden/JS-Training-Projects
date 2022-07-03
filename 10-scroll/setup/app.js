// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date');
date.textContent = new Date().getFullYear();
// ********** close links ************
const linksContainer = document.querySelector('.links-container');
const lis = document.querySelectorAll('.links-container .links li');
const navToggle = document.querySelector('.nav-toggle');
// navToggle.addEventListener('click',e=>{
//   if (!linksContainer.classList.contains('show-links')) {
//     linksContainer.style.height = `${50*lis.length}px`;
//     linksContainer.classList.add('show-links');
//   } else {
//     linksContainer.style.height = 0;
//     linksContainer.classList.remove('show-links');
//   }
// })

// there solution
const links = document.querySelector('.links');

navToggle.addEventListener('click',e=>{
  const containerHeight = linksContainer.getBoundingClientRect().height; // will be 0 becuase of what is wrote in css file so we will depend on links class's height
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(containerHeight,linksHeight)
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
})

// ********** fixed navbar ************
const nav = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll',e=>{
  // console.log(window.pageYOffset)

  if (window.scrollY > nav.getBoundingClientRect().height) {
    nav.classList.add('fixed-nav');
    topLink.classList.add('show-link');
  } else {
    nav.classList.remove('fixed-nav');
    topLink.classList.remove('show-link');
  }
  if (window.scrollY > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
})
// ********** smooth scroll ************
// select links

const scrollLink = document.querySelectorAll('.scroll-link');

for(let link of scrollLink){
  link.addEventListener('click',e=>{
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    let top = element.offsetTop-nav.getBoundingClientRect().height
    if (!nav.classList.contains('fixed-nav')) {
      linksContainer.style.height = 0;
      top -= nav.getBoundingClientRect().height
    } 
    if (linksContainer.getBoundingClientRect().height > 0 ) {
      top += linksContainer.getBoundingClientRect().height;
    }
    window.scrollTo(0,top);
    linksContainer.style.height = 0;

  })
}


