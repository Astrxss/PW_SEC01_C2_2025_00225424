const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const descripcion = document.getElementById("descripcionTexto");
const contenido = document.getElementById("contenidoLibros");
const zonaImagen = document.getElementById("zonaImagen");
const fileInput = document.getElementById("fileInput");

document.getElementById("btnOrdenar").addEventListener("click", () => {
  contenido.classList.toggle("vertical");
});

document.getElementById("btnTitulo").addEventListener("click", () => {
  const nuevo = prompt("Escribe un nuevo título:", titulo.textContent);
  if (nuevo) {
    titulo.textContent = nuevo;
    document.title = nuevo;
  }
});

document.getElementById("btnColores").addEventListener("click", () => {
  const nuevoColor = subtitulo.style.color === "blue" ? "black" : "blue";
  const nuevaFuente = subtitulo.style.fontFamily === '"Times New Roman"' ? "Arial" : '"Times New Roman"';

  subtitulo.style.color = nuevoColor;
  subtitulo.style.fontFamily = nuevaFuente;

  const parrafos = subtitulo.parentElement.querySelectorAll("p");
  parrafos.forEach(p => {
    p.style.color = nuevoColor;
    p.style.fontFamily = nuevaFuente;
  });
});

document.getElementById("btnImagen").addEventListener("click", () => {
  const usarURL = confirm("¿Quieres usar una URL externa?");
  if (usarURL) {
    const url = prompt("Ingresa la URL de la imagen:");
    if (url) zonaImagen.innerHTML = `<img src="${url}" alt="Imagen del libro" style="max-width:100%">`;
  } else {
    fileInput.click();
  }
});

fileInput.addEventListener("change", e => {
  const archivo = e.target.files[0];
  if (archivo) {
    const url = URL.createObjectURL(archivo);
    zonaImagen.innerHTML = `<img src="${url}" alt="Imagen del libro" style="max-width:100%">`;
  }
});