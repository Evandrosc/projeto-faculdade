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