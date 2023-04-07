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

// animação carrossel

let slideIndex = 0;
let carouselTimeoutId;

function carousel() {
    console.log('carousel()');
    const slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    carouselTimeoutId = setTimeout(carousel, 5000); // Alterar imagem a cada 5 segundos
}

function plusSlides(n) {
    console.log('plusSlides(' + n + ')');
    clearTimeout(carouselTimeoutId);
    const slides = document.getElementsByClassName("mySlides");
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    carouselTimeoutId = setTimeout(carousel, 5000); // Alterar imagem a cada 5 segundos
}

// Seleciona o elemento do carrossel
const carouselElement = document.querySelector('.main-section');

// Cria uma nova instância do IntersectionObserver
const carouselObserver = new IntersectionObserver(function (entries) {
    console.log('observer callback');
    // Verifica se o elemento do carrossel está visível na tela
    if (entries[0].isIntersecting) {
        // Se estiver visível, reinicia o carrossel
        carousel();
    } else {
        // Caso contrário, pausa o carrossel
        clearTimeout(carouselTimeoutId);
    }
});

// Observa o elemento do carrossel
carouselObserver.observe(carouselElement);