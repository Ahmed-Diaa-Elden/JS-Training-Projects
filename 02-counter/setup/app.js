const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
const value = document.querySelector("#value");

decrease.addEventListener('click',(e)=>{
  const x = parseInt(value.innerHTML) - 1;
  value.innerHTML = x;
  value.style.color = 'red';
})
increase.addEventListener('click',(e)=>{
  const x = parseInt(value.innerHTML) + 1;
  value.innerHTML = x;
  value.style.color = 'green';
})
reset.addEventListener('click',(e)=>{
  const x = parseInt(value.innerHTML);
  value.innerHTML = 0;
  value.style.color =  'black';
})