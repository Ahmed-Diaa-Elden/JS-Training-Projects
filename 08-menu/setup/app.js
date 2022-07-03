const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const menuHtml = menu.map((x)=>{
  return makingMenu(x);
})
sectionCenter.innerHTML = menuHtml.join('') // we wrote '' to replace , with nothing in concatinating

function makingMenu(x) {
  return `
  <!-- single item -->
  <article class="menu-item ${x.category}">
          <img src=${x.img} class="photo" alt=${x.title}>
          <div class="item-info">
            <header>
              <h4>${x.title}</h4>
              <h4 class="price">$${x.price}</h4>
            </header>
            <p class="item-text">${x.desc}</p>
            
          </div>
        </article>
  <!-- end of single item -->
  `
}

// get unique categories 
function onlyUnique(element, index, array) {
  return array.indexOf(element) === index;
}

let uniqueCategories = menu.map(e=> e.category).filter(onlyUnique);
// end of getting unique categories 

for(let e of uniqueCategories){
  btnContainer.innerHTML += `<button class="filter-btn" type="button" data-id="${e}">${e}</button>`;
}

const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(function (btn) {
  btn.addEventListener('click',(e)=>{
    if (e.currentTarget.dataset.id === 'all') {
      sectionCenter.innerHTML = menuHtml.join('')
    } else {
      const filtered = menu.filter((x)=>{
        return x.category === e.currentTarget.dataset.id
      })
      const menuHtml = filtered.map((x)=>{
        return makingMenu(x);
      })
      sectionCenter.innerHTML = menuHtml.join('');
    }
  })
})

// another solution (This is my solution and I prefer it but I am practicing another ways)
// I love my method as it deals with server side once (when loading our page) then filtering process depends on the loaded data in our page

// solution for adding all menu's items

// for(let x of menu){
//   const element = `
//   <!-- single item -->
//   <article class="menu-item ${x.category}">
//           <img src=${x.img} class="photo" alt=${x.title}>
//           <div class="item-info">
//             <header>
//               <h4>${x.title}</h4>
//               <h4 class="price">$${x.price}</h4>
//             </header>
//             <p class="item-text">${x.desc}</p>
            
//           </div>
//         </article>
//   <!-- end of single item -->
//   `;
//   // console.log(sectionCenter.innerHTML);
//   sectionCenter.innerHTML += element;
  
// };

// Solution of filtering

// const menuItems = sectionCenter.querySelectorAll('.menu-item');

// for(let filterBtn of filterBtns){
//   filterBtn.addEventListener('click',(e)=>{ 
//     filter(e.currentTarget.dataset.id);
//   })
// }

// function filter(element) {
//   for(let x of menuItems){
//     if(!x.classList.contains(element)){
//       x.style.display = 'none'
//     };
//     if(x.classList.contains(element) || element === 'all'){
//       x.style.display = 'grid'
//     };
//   }
// }