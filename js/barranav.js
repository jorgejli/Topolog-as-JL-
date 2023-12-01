document.addEventListener("DOMContentLoaded", function() {
    var nav = document.querySelector('.segunda-seccion-barra-de-navegacion');
    var navOffset = nav.offsetTop;

    function fixNav() {
      if (window.scrollY >= navOffset) {
      document.body.style.paddingTop = nav.offsetHeight + 'px'; // Ajusta el espacio para evitar que el contenido se oculte detrás de la barra fija
      nav.classList.add('fixed-nav');
      } else {
      document.body.style.paddingTop = 0;
      nav.classList.remove('fixed-nav');
      }
    }
    window.addEventListener('scroll', fixNav);
    });