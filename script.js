document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("miBoton");
  
  boton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#ffe680"; // cambia el fondo
    alert("¡Hiciste clic en el botón!");
  });
});

