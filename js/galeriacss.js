// JavaScript (script.js)
document.addEventListener("DOMContentLoaded", function () {
    var imagenGrande = document.getElementById("imagenGrande");
    // Deja la imagenGrande vacía al cargar la página
    imagenGrande.innerHTML = '';
});

function mostrarImagen(ruta) {
    var imagenGrande = document.getElementById("imagenGrande");
    imagenGrande.innerHTML = '<img src="' + ruta + '" alt="Imagen grande">';
}
