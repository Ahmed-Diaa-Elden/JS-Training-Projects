const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

const toggling = (e)=>{
  sidebar.classList.toggle('show-sidebar');
}

sidebarToggle.addEventListener('click',toggling);
closeBtn.addEventListener('click',toggling);

