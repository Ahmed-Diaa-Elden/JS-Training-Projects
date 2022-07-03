const tabBtns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

for(let tabBtn of tabBtns){
  tabBtn.addEventListener('click',e=>{
    for(let i=0; i< tabBtns.length; i++){
      tabBtns[i].classList.remove('active');
      contents[i].classList.remove('active');
    }
    e.currentTarget.classList.add('active')
    document.getElementById(e.currentTarget.dataset.id).classList.add('active');
    // e.currentTarget.dataset.id
  })
}