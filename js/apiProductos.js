async function obtenerProductos() {
    const response = await fetch("http://localhost:3001/productos");
    const productos = await response.json();
    return productos;
}

async function crearProducto(nombre, precio, imagen) {
   
    precio = parseFloat(precio);
    const response = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, precio, imagen })
    });

    const nuevoProducto = await response.json();
    return nuevoProducto;
}

async function eliminarProducto(id) {
    const response = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("No se pudo eliminar el producto.");
    }
}

export const apiProductos = {
    obtenerProductos,
    crearProducto,
    eliminarProducto,
};