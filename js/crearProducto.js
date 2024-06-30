import { apiProductos } from "./apiProductos.js";

const formulario = document.getElementById("product-form");

// Evento de submit para crear un nuevo producto
formulario.addEventListener("submit", async function(event) {
    event.preventDefault();

   
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const imagen = document.getElementById("imagen").value;

    window.location.href="envio-concluido.html";

    try {
        // Crear el producto utilizando la API
        const nuevoProducto = await apiProductos.crearProducto(nombre, precio, imagen);

       
        window.location.href = "../pages/envio-concluido.html";
    } catch (error) {
        
        alert(`Error al agregar el producto: ${error.message}`);
    }
});


window.addEventListener("DOMContentLoaded", async function() {
    try {
        
        const productos = await apiProductos.obtenerProductos();

        
        mostrarProductos(productos);
    } catch (error) {
      
        console.error(`Error al cargar los productos: ${error.message}`);
    }
});


function mostrarProductos(productos) {
    const listaProductos = document.getElementById("product-list");

   
    listaProductos.innerHTML = "";

   
    productos.forEach(producto => {
        const item = document.createElement("li");
        item.classList.add("item");

        const imagen = document.createElement("img");
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        const infoProducto = document.createElement("div");
        infoProducto.classList.add("info-product");

        const nombreProducto = document.createElement("h2");
        nombreProducto.textContent = producto.nombre;

        const precioProducto = document.createElement("p");
        precioProducto.classList.add("price");

        
        const precio = parseFloat(producto.precio);
        precioProducto.textContent = `$${isNaN(precio) ? '0.00' : precio.toFixed(2)}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.innerHTML = '<img class="delete-uno" src="https://static.vecteezy.com/system/resources/previews/026/197/318/non_2x/delete-icon-symbol-design-illustration-vector.jpg" alt="Delete">';

        //  eliminar el producto
        botonEliminar.addEventListener("click", async function() {
            try {
                await apiProductos.eliminarProducto(producto.id);
                
                item.remove();
            } catch (error) {
                console.error(`Error al eliminar el producto: ${error.message}`);
            }
        });

        infoProducto.appendChild(nombreProducto);
        infoProducto.appendChild(precioProducto);
        infoProducto.appendChild(botonEliminar);

        item.appendChild(imagen);
        item.appendChild(infoProducto);

        listaProductos.appendChild(item);
    });
}