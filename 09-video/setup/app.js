// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const switchBtn = document.querySelector('.switch-btn');
const videoContainer = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');

window.addEventListener('load',e=>{ // The DOMContentLoaded event is fired when the document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading (the load event can be used to detect a fully-loaded page).
  preloader.classList.add('hide-preloader');
})
switchBtn.addEventListener('click',(e)=>{
  // switchBtn.classList.toggle('slide');
  // if (videoContainer.paused) {
  //   videoContainer.play()
  // } else {
  //   videoContainer.pause()
  // }
  if (switchBtn.classList.contains('slide')) {
    switchBtn.classList.remove('slide');
    videoContainer.play()
  } else {
    switchBtn.classList.add('slide');
    videoContainer.pause()
  }
})