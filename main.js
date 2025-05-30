document.addEventListener("DOMContentLoaded", () => {
  cargarProductos();
});

async function cargarProductos() {
  const res = await fetch("data/productos.json");
  const productos = await res.json();
  const contenedor = document.getElementById("productos");

  contenedor.innerHTML = "";

  productos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <button class="agregar-btn" onclick="agregarAlCarrito(${producto.id})">Agregar</button>
    `;
    contenedor.appendChild(div);
  });
}
