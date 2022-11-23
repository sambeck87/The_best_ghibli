const menu = document.querySelector('.btn_menu');
const closeMenu = document.getElementById('close');
const sponsor = document.getElementById('sponsor');
const news = document.getElementById('news');

function displayMenu() {
  const showMenu = document.getElementById('menu');
  showMenu.classList.toggle('hide');
}

menu.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', displayMenu);
sponsor.addEventListener('click', displayMenu);
news.addEventListener('click', displayMenu);
