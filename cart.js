let carrito = [];

function agregarAlCarrito(id) {
  carrito.push(id);
  actualizarContador();
}

function actualizarContador() {
  document.getElementById("cart-count").textContent = carrito.length;
}
