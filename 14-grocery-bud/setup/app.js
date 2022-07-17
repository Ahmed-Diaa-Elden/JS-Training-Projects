// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// // edit option
// let editElement;
// let editFlag = false;
// let editID = "";
// // ****** event listeners **********

// // submit form
// form.addEventListener("submit", addItem);
// // clear list
// clearBtn.addEventListener("click", clearItems);
// // display items onload
// window.addEventListener("DOMContentLoaded", setupItems);

// // ****** functions **********

// // add item
// function addItem(e) {
//   e.preventDefault();
//   const value = grocery.value;
//   const id = new Date().getTime().toString();

//   if (value !== "" && !editFlag) {
//     const element = document.createElement("article");
//     let attr = document.createAttribute("data-id");
//     attr.value = id;
//     element.setAttributeNode(attr);
//     element.classList.add("grocery-item");
//     element.innerHTML = `<p class="title">${value}</p>
//             <div class="btn-container">
//               <!-- edit btn -->
//               <button type="button" class="edit-btn">
//                 <i class="fas fa-edit"></i>
//               </button>
//               <!-- delete btn -->
//               <button type="button" class="delete-btn">
//                 <i class="fas fa-trash"></i>
//               </button>
//             </div>
//           `;
//     // add event listeners to both buttons;
//     const deleteBtn = element.querySelector(".delete-btn");
//     deleteBtn.addEventListener("click", deleteItem);
//     const editBtn = element.querySelector(".edit-btn");
//     editBtn.addEventListener("click", editItem);

//     // append child
//     list.appendChild(element);
//     // display alert
//     displayAlert("item added to the list", "success");
//     // show container
//     container.classList.add("show-container");
//     // set local storage
//     addToLocalStorage(id, value);
//     // set back to default
//     setBackToDefault();
//   } else if (value !== "" && editFlag) {
//     editElement.innerHTML = value;
//     displayAlert("value changed", "success");

//     // edit  local storage
//     editLocalStorage(editID, value);
//     setBackToDefault();
//   } else {
//     displayAlert("please enter value", "danger");
//   }
// }
// // display alert
// function displayAlert(text, action) {
//   alert.textContent = text;
//   alert.classList.add(`alert-${action}`);
//   // remove alert
//   setTimeout(function () {
//     alert.textContent = "";
//     alert.classList.remove(`alert-${action}`);
//   }, 1000);
// }

// // clear items
// function clearItems() {
//   const items = document.querySelectorAll(".grocery-item");
//   if (items.length > 0) {
//     items.forEach(function (item) {
//       list.removeChild(item);
//     });
//   }
//   container.classList.remove("show-container");
//   displayAlert("empty list", "danger");
//   setBackToDefault();
//   localStorage.removeItem("list");
// }

// // delete item

// function deleteItem(e) {
//   const element = e.currentTarget.parentElement.parentElement;
//   const id = element.dataset.id;

//   list.removeChild(element);

//   if (list.children.length === 0) {
//     container.classList.remove("show-container");
//   }
//   displayAlert("item removed", "danger");

//   setBackToDefault();
//   // remove from local storage
//   removeFromLocalStorage(id);
// }
// // edit item
// function editItem(e) {
//   const element = e.currentTarget.parentElement.parentElement;
//   // set edit item
//   editElement = e.currentTarget.parentElement.previousElementSibling;
//   // set form value
//   grocery.value = editElement.innerHTML;
//   editFlag = true;
//   editID = element.dataset.id;
//   //
//   submitBtn.textContent = "edit";
// }
// // set backt to defaults
// function setBackToDefault() {
//   grocery.value = "";
//   editFlag = false;
//   editID = "";
//   submitBtn.textContent = "submit";
// }

// // ****** local storage **********

// // add to local storage
// function addToLocalStorage(id, value) {
//   const grocery = { id, value };
//   let items = getLocalStorage();
//   items.push(grocery);
//   localStorage.setItem("list", JSON.stringify(items));
// }

// function getLocalStorage() {
//   return localStorage.getItem("list")
//     ? JSON.parse(localStorage.getItem("list"))
//     : [];
// }

// function removeFromLocalStorage(id) {
//   let items = getLocalStorage();

//   items = items.filter(function (item) {
//     if (item.id !== id) {
//       return item;
//     }
//   });

//   localStorage.setItem("list", JSON.stringify(items));
// }
// function editLocalStorage(id, value) {
//   let items = getLocalStorage();

//   items = items.map(function (item) {
//     if (item.id === id) {
//       item.value = value;
//     }
//     return item;
//   });
//   localStorage.setItem("list", JSON.stringify(items));
// }

// // SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// // ****** setup items **********

// function setupItems() {
//   let items = getLocalStorage();

//   if (items.length > 0) {
//     items.forEach(function (item) {
//       createListItem(item.id, item.value);
//     });
//     container.classList.add("show-container");
//   }
// }

// function createListItem(id, value) {
//   const element = document.createElement("article");
//   let attr = document.createAttribute("data-id");
//   attr.value = id;
//   element.setAttributeNode(attr);
//   element.classList.add("grocery-item");
//   element.innerHTML = `<p class="title">${value}</p>
//             <div class="btn-container">
//               <!-- edit btn -->
//               <button type="button" class="edit-btn">
//                 <i class="fas fa-edit"></i>
//               </button>
//               <!-- delete btn -->
//               <button type="button" class="delete-btn">
//                 <i class="fas fa-trash"></i>
//               </button>
//             </div>
//           `;
//   // add event listeners to both buttons;
//   const deleteBtn = element.querySelector(".delete-btn");
//   deleteBtn.addEventListener("click", deleteItem);
//   const editBtn = element.querySelector(".edit-btn");
//   editBtn.addEventListener("click", editItem);

//   // append child
//   list.appendChild(element);
// }





// ******** Ahmed Diaa solution ********
// 

window.addEventListener('DOMContentLoaded', e=>{
  let items = getLastData();
  if(items.length > 0){
    container.classList.add('show-container');
    items.map(item=>{
      appendHtml(item.id,item.value);
      return item
    })
    delete_editButtons();
  }
  
})

function alert1(string,color) {
  alert.classList.add(`alert-${color}`)
  alert.textContent = string;
  setTimeout((e) => {
    alert.textContent = '';
    alert.classList.remove(`alert-${color}`)
  }, 1000);
}

let title; // contains item with class named title

function addingList(item) {
  const id = new Date().getTime().toString();
  appendHtml(id,item);
  
  let items = getLastData();
  items.push({id,value:grocery.value});
  localStorage.setItem('listDiaa', JSON.stringify(items));

  grocery.value = '';
  // deleting and editing buttons
  delete_editButtons();
}

submitBtn.addEventListener('click',e=>{
  if (submitBtn.textContent.toLocaleLowerCase() === 'submit') {
    e.preventDefault();
    
    if (!grocery.value) {
      alert1('Please Enter Value','danger')
    } else {
      container.classList.add('show-container')
      addingList(grocery.value);
      alert1('Item Added To The List','success')

    }
  }
  
})

clearBtn.addEventListener('click', e=>{
  list.innerHTML = '';
  container.classList.remove('show-container')
  alert1('empty list', 'danger')
  removeAllItems();
  submitBtn.textContent = 'submit';
})

function appendHtml(id,item) {
  list.innerHTML += `<article class="grocery-item" data-id="${id}">
            <p class="title">${item}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn"> <i class="fas fa-edit"></i> </button>
              <button type="button" class="delete-btn"> <i class="fas fa-trash"></i> </button>
            </div>
          </article>`
}

// localStorage.setItem('listDiaa', JSON.stringify())
function getLastData() {
  return localStorage.getItem('listDiaa') ? JSON.parse(localStorage.getItem('listDiaa')) : [];
}
function removeAllItems(){
  localStorage.removeItem('listDiaa');
}

// deleting and editing buttons
function delete_editButtons() {

  const deleteBtn = document.querySelectorAll('.delete-btn');
  const editBtn = document.querySelectorAll('.edit-btn');
  let items = getLastData();
  
  // for deleting items
  deleteBtn.forEach(el => {
    el.addEventListener('click', e=>{
      const currentID = e.currentTarget.parentElement.parentElement.dataset.id;
      e.currentTarget.parentElement.parentElement.remove();
      if (list.innerHTML === '') { // in case we removed the last item
        clearBtn.click();
      } else{
        alert1('item removed','danger')
        items = items.filter(item => {
          if(item.id !== currentID) return item
        });
        localStorage.setItem('listDiaa', JSON.stringify(items));
        grocery.value = '';
      }
      submitBtn.textContent = 'submit';
    })
  });
  // for editing items
  let currentID;
  editBtn.forEach(el => {
    el.addEventListener('click', e=>{
      currentID = e.currentTarget.parentElement.parentElement.dataset.id;
      title = e.currentTarget.parentElement.parentElement.querySelector('.title');
      grocery.value = title.textContent;
      submitBtn.textContent = 'edit';
      submitBtn.addEventListener('click', em=>{
        if (submitBtn.textContent.toLocaleLowerCase() === 'edit') {
          em.preventDefault();
          if (!grocery.value) { // if it's empty
            alert1('Please Enter Value','danger')
          } else {
            alert1('value changed','success')
            title.textContent= grocery.value;
            submitBtn.textContent = 'submit';
            items = items.map(item => {
              if(item.id === currentID) {
                item.value = grocery.value;
              }
              return item
            });
            localStorage.setItem('listDiaa', JSON.stringify(items));
            grocery.value = '';
          }
        }
      })
    })
  });
}

// editing and deleting item from local storage

function removeItem(id) {
  let items = getLastData();

}