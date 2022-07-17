const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
let count = 1;
carousel(count);

slides.forEach((slide,i) => {
  slide.style.left = `${i*100}%`;
});

nextBtn.addEventListener('click', e=>{
  count++;
  prevBtn.style.visibility = 'visible';
  if (count > slides.length) {
    count = 1; // go to first slide
    carousel(count)
  } else if (count <= 0) {
    count = slides.length; // go to last slide
    carousel(count);
  } else{
    carousel(count)
  }
})

prevBtn.addEventListener('click', e=>{
  count--;
  nextBtn.style.visibility = 'visible';
  if (count > slides.length) {
    count = 1; // go to first slide
    carousel(count)
  } else if (count <= 0) {
    count = slides.length; // go to last slide
    carousel(count);
  } else{
    carousel(count)
  }
})

function carousel(x) {
  const i = x-1; // for moving slides

  slides.forEach(slide => {
    slide.style.transform = `translateX(-${i*100}%)`;
  });
  
  // to hide button in boundries
  
  // if (x === slides.length) { 
  //   nextBtn.style.visibility = 'hidden';
  // } else if (x === 1) {
  //   prevBtn.style.visibility = 'hidden';
  // } 
}