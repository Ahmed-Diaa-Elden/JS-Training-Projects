//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question');
const questionBtns = document.querySelectorAll('.question-btn');

// for (let i=0; i< questionBtns.length; i++){
//   questionBtns[i].addEventListener('click',(e)=>{
//     for (let j = 0; j < questionBtns.length; j++) {
//       if (i === j) continue;
//       questions[j].classList.remove('show-text');
//     }
//     questions[i].classList.toggle('show-text');
//   })
// }

// Another way

questionBtns.forEach(questionBtn => {
  questionBtn.addEventListener('click',(e)=>{
    e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
    // console.log(e.currentTarget.parentElement.parentElement.parentElement)
    // console.log(e.currentTarget) // currentTarget => is the element that the event listener is attached to.
    // console.log(e.target) // target => is the element that triggered the event (e.g., the user clicked on)
  })
});