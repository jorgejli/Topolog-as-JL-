document.addEventListener("DOMContentLoaded", function() {
    // Espera a que el contenido HTML esté cargado
  
    // Obtiene la altura de la pantalla de bienvenida
    var welcomeScreenHeight = document.querySelector('.welcome-screen').offsetHeight;
  
    // Añade un evento de desplazamiento
    window.addEventListener('scroll', function() {
      var navbar = document.querySelector('.navbar');
  
      // Verifica si el usuario ha desplazado más allá de la pantalla de bienvenida
      if (window.scrollY > welcomeScreenHeight) {
        // Hace que la barra de navegación sea fija
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
      } else {
        // Restablece la posición de la barra de navegación
        navbar.style.position = 'relative';
      }
    });
  });