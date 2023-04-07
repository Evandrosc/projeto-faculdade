// selecione o ícone do menu móvel
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');

// adicione um ouvinte de eventos para o clique no ícone
mobileMenuIcon.addEventListener('click', function () {
    // selecione as linhas do ícone do menu móvel
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const line3 = document.querySelector('.line3');

    // adicione ou remova a classe .active do ícone e das linhas
    mobileMenuIcon.classList.toggle('active');
    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
});

// adicione o ouvinte de eventos diretamente no botão do menu móvel
document.querySelector('[data-menu]').addEventListener('click', function () {
    // selecione o elemento do menu móvel
    const menuMobile = document.querySelector('.mobile-nav');

    // adicione ou remova a classe .open no menu móvel
    menuMobile.classList.toggle('open');
});

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