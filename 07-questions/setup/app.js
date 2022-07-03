//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question');
const questionBtns = document.querySelectorAll('.question-btn');

for (let i=0; i< questionBtns.length; i++){
  questionBtns[i].addEventListener('click',(e)=>{
    for (let j = 0; j < questionBtns.length; j++) {
      if (i === j) continue;
      questions[j].classList.remove('show-text');
    }
    questions[i].classList.toggle('show-text');
  })
}
