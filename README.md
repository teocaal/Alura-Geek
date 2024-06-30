Este proyecto consiste en una aplicación web para gestionar productos, desarrollada como parte del Challenge AluraGeek. Permite a los usuarios agregar nuevos productos, visualizar una lista de productos existentes y eliminar productos mediante interacciones con un servidor simulado.

Características
Agregar Productos: Los usuarios pueden ingresar un nombre, precio e imagen para agregar nuevos productos al catálogo.

Listar Productos: Se muestra una lista de productos existentes cargada desde el servidor al cargar la página.

Eliminar Productos: Permite eliminar productos individualmente desde la lista, actualizando tanto la interfaz como la base de datos simulada.

Tecnologías Utilizadas
Frontend: HTML, CSS (con estilos personalizados) y JavaScript.

Backend Simulado: JSON Server para simular un servidor RESTful en el puerto 3001.

Comunicación: Fetch API para realizar peticiones HTTP desde el frontend al backend.

Estructura del Proyecto
index.html: Página principal que muestra la lista de productos y el formulario para agregar nuevos productos.

envioConcluido.html: Página de confirmación que se muestra al agregar un producto exitosamente.

styles/: Carpeta que contiene el archivo styles.css con los estilos personalizados.

js/: Carpeta que contiene los scripts JavaScript para interactuar con la API de productos y manejar eventos del frontend.

Instrucciones de Uso

Clona este repositorio en tu máquina local.

Instala JSON Server globalmente si no lo has hecho: npm install -g json-server.

Ejecuta JSON Server para simular el backend: json-server --watch db.json --port 3001.

Abre el archivo index.html en tu navegador para empezar a interactuar con la aplicación.

Contribuciones
Este proyecto está destinado como ejercicio para el Challenge AluraGeek.

Autor
Nombre: Cristian Mateo Cardona Álvarez
Contacto: mateo23ca@gmail.com