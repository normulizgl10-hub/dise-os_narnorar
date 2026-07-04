// BUSCADOR
document.getElementById("buscador").addEventListener("keyup", function() {
  let filtro = this.value.toLowerCase();
  let productos = document.querySelectorAll(".card");

  productos.forEach(p => {
    let texto = p.innerText.toLowerCase();
    p.style.display = texto.includes(filtro) ? "block" : "none";
  });
});

// FILTRO DE CATEGORÍAS
function filtrar(categoria) {
  // Guardamos la categoría activa (por defecto "todos")
let categoriaActiva = "todos";

// FILTRO DE CATEGORÍAS
function filtrar(categoria) {
  categoriaActiva = categoria; // Actualizamos la categoría actual
  ejecutarFiltroCombinado();
}

// BUSCADOR
document.getElementById("buscador").addEventListener("keyup", function() {
  ejecutarFiltroCombinado();
});

// FUNCIÓN MAESTRA QUE COMBINA AMBOS FILTROS
function ejecutarFiltroCombinado() {
  let busqueda = document.getElementById("buscador").value.toLowerCase();
  let productos = document.querySelectorAll(".card");

  productos.forEach(p => {
    let texto = p.innerText.toLowerCase();
    let categoriaProducto = p.dataset.categoria;

    // Condición 1: ¿Coincide con la categoría seleccionada?
    let coincideCategoria = (categoriaActiva === "todos" || categoriaProducto === categoriaActiva);
    
    // Condición 2: ¿Coincide con el texto escrito?
    let coincideBusqueda = texto.includes(busqueda);

    // Si cumple ambas condiciones, se muestra. Si no, se oculta.
    if (coincideCategoria && coincideBusqueda) {
      p.style.display = ""; // Vuelve a su estado original de CSS (evita romper el flexbox)
    } else {
      p.style.display = "none";
    }
  });
}