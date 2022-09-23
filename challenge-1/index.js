const menuBtn = document.querySelector('#menuBtn');
const navArea = document.querySelector('#navArea');
const navLinks = document.querySelector('.nav-links');

const isOpen = () => JSON.parse(menuBtn.getAttribute('aria-expanded'));

const toggleMenu = () => {
  const currentOpenState = isOpen()
  menuBtn.setAttribute('aria-expanded', !currentOpenState);
  // TODO: add/remove tabindexing
}

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && isOpen()) {
    toggleMenu()
  }
})

menuBtn.addEventListener('click', toggleMenu)
navArea.addEventListener('click', (e) => {
  if(e.target === e.currentTarget){
    toggleMenu()
  }
})

