// menu mobile

function mostraMenu() {
  let menuMobile = document.querySelector(".mobile-nav");
  if (menuMobile.classList.contains("open")) {
      menuMobile.classList.remove("open");
  } else {
      menuMobile.classList.add("open");
  }
}

const botaoMenu = document.querySelector('[data-menu]');
botaoMenu.addEventListener('click', mostraMenu);

// sub menu mobile

function mostraSubMenu() {
  const nav = document.querySelector('.sub-menu');
  if (nav.classList.contains("open")) {
      nav.classList.remove("open");
  } else {
      nav.classList.add("open");
  }
}

const elemento = document.querySelector('[data-subMenu]');
elemento.addEventListener('click', mostraSubMenu);