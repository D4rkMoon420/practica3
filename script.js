let imagenIndex = 0;
const imagenes = [
    { src: "imagen1.jpg", titulo: "Steph Curry" },
    { src: "imagen2.jpg", titulo: "Kobe Bryant" },
    { src: "imagen3.png", titulo: "Michael Jordan" }
];

function cambiarImagen() {
    imagenIndex = (imagenIndex + 1) % imagenes.length;
    document.getElementById("imagen").src = imagenes[imagenIndex].src;
    document.getElementById("titulo").innerText = imagenes[imagenIndex].titulo;
}
