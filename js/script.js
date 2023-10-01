document.addEventListener("DOMContentLoaded", () => {
  obtenerProductosYmostrar();
});

const obtenerProductosYmostrar = async () => {
  const response = await fetch("Productos.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => localStorage.setItem("Productos", JSON.stringify(data)));

  mostrarProductos();
 
}

//funcion para cargar la vista principal
function mostrarProductos() {
  let productos = JSON.parse(localStorage.getItem("Productos"));

  let bodyProductos = document.getElementById("bodyProductos");


  // Borro los datos para cargar nuevos
  if(bodyProductos != null)
    bodyProductos.innerHTML = "";
  
    let texto = "";

  productos.Productos.forEach(producto => {
    let content = document.createElement("div");
    
    texto='<div id="listaProductos">';  
    texto+='<div class="row">';
    texto+='<div class="col-5"><h3 class="tit-1">' + producto.nombre + '</h3></div>';  
    texto+='<div class="col-6"><p class="pf-1">' + producto.descripcion + '</p></div>';  
    texto+='<div class="col-1"><button target="blank" class= "btn-1" onclick="cargarDetalleProducto(`'+ producto.codigo +'`)">+<i class="bi bi-patch-plus"></i></button></div>';  
    texto+='</div">';
    texto+='</div">';  

    content.innerHTML = texto;
    bodyProductos.append(content);
});
}

//funcion para cargar la ventana con el detalle del producto elegido
function cargarDetalleProducto(codigo) {
  localStorage.setItem("DetalleProducto",codigo);

  window.open("./DetalleProducto.html", "_blank");
}
