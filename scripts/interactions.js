const menuHome = document.getElementById('menu_button');
const closeMenu = document.getElementById('close');
const link1 = document.getElementById('program_link');
const link2 = document.getElementById('join_link');

function displayMenu() {
  const displayMenu = document.getElementById('menu');
  displayMenu.classList.toggle('hide');
}
menuHome.addEventListener('click', displayMenu);
closeMenu.addEventListener('click', displayMenu);
link1.addEventListener('click', displayMenu);
link2.addEventListener('click', displayMenu);

const more = document.getElementById('more_button');

function showingMore() {
  const speakers = document.getElementById('speakers_section');
  speakers.classList.toggle('speakers');
  const arrow = document.getElementById('down_button');
  arrow.classList.toggle('rotar');
  const more = document.getElementById('text_more');
  more.classList.toggle('hide');
  const less = document.getElementById('text_less');
  less.classList.toggle('hide');
}

more.addEventListener('click', showingMore);