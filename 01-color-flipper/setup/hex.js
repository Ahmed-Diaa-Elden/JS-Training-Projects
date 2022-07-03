const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('#btn');
const colorHex = document.querySelectorAll('.color')[0];

btn.addEventListener("click", (e)=>{
  const x = RGBToHex();
  document.body.style.backgroundColor = x;
  colorHex.textContent = x;
});

function getRand(){
  return Math.floor(Math.random()*256);
}

function RGBToHex() {
  r = getRand().toString(16);
  g = getRand().toString(16);
  b = getRand().toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}