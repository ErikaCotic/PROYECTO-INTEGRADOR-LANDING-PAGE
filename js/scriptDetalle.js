document.addEventListener("DOMContentLoaded", () => {
    
  mostrarDetalle();

});

// Funcion para mostrar el detalle del producto elegido
function mostrarDetalle() {
  let productos = JSON.parse(localStorage.getItem("Productos"));
  let codigoProducto = localStorage.getItem("DetalleProducto");

  let datosProducto = productos.Productos.filter(
    (x) => x.codigo == codigoProducto
  );
  let texto = "";

  div = document.createElement("div");


  texto = '<div>';
  texto += '<h1 class="h1-2">' + datosProducto[0].nombre + '</h1>';
  texto += '<h2 class="h2-2">' + datosProducto[0].descripcion + '</h2>';
  texto += '<p class="pf-2">' + datosProducto[0].detalle + '</p>';
  texto += '<h4 class="h4-1">' + datosProducto[0].precio + '</h4>';
  texto += '<h4 class="h4-2">' + convertirEstrellas(datosProducto[0].puntuacion) + '</h4>';
  texto += '</div">';

  div.innerHTML = texto;


  let imagenDetalle = document.getElementById("imagenDetalle");
  imagenDetalle.setAttribute("src", datosProducto[0].imagen);

  let bodyDetalleProducto = document.getElementById("detalleProducto");
  bodyDetalleProducto.append(div);
}

// Funcion para generar las estrellas segun la puntuacion obtenida
function convertirEstrellas(puntuacion) {
  const estrellasLlenas = puntuacion.length; 
  const estrellasVacias = 5-estrellasLlenas;
  const estrellaHTML = '<label style="color:yellow" class="estrella-llena">★</label>'.repeat(estrellasLlenas) + '<label class="estrella-vacia">☆</label>'.repeat(estrellasVacias);
  
  return'<p class="puntuacion-estrellas">'+estrellaHTML+'</p>';
}