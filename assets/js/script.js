// menu mobile

function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "assets/img/menu_white_36dp.svg";
    }else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "assets/img/close_white_36dp.svg";
    }
}

// sub menu dropwn mobile

document.addEventListener("DOMContentLoaded", function() {
  var cursosLink = document.getElementById("cursos-link");
  cursosLink.addEventListener("click", function() {
    var subMenuCursos = document.getElementById("sub-menu-cursos");
    subMenuCursos.classList.toggle("active");
  });
});

// animação carrossel

var slideIndex = 0;
var timeoutId;

function carousel() {
  console.log('carousel()');
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  timeoutId = setTimeout(carousel, 5000); // Alterar imagem a cada 5 segundos
}

function plusSlides(n) {
  console.log('plusSlides(' + n + ')');
  clearTimeout(timeoutId);
  var x = document.getElementsByClassName("mySlides");
  slideIndex += n;
  if (slideIndex > x.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
  timeoutId = setTimeout(carousel, 5000); // Alterar imagem a cada 5 segundos
}

// Seleciona o elemento do carrossel
var carouselElement = document.querySelector('.main-section');

// Cria uma nova instância do IntersectionObserver
var observer = new IntersectionObserver(function(entries) {
  console.log('observer callback');
  // Verifica se o elemento do carrossel está visível na tela
  if (entries[0].isIntersecting) {
    // Se estiver visível, reinicia o carrossel
    carousel();
  } else {
    // Caso contrário, pausa o carrossel
    clearTimeout(timeoutId);
  }
});

// Observa o elemento do carrossel
observer.observe(carouselElement);