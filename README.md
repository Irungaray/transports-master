# Tecnologías usadas:
- ReactJs
- Material UI
- Axios
- Js Cookie

# Flujo de la aplicación:
Al ingresar a la aplicación, se recibe al usuario con un formulario de Login, con los valores preestablecidos de la API de pruebas para no generar confusiones.

Al clickear el botón "Ingresar", se ejecuta la funcion "login()" (POST) contra la API:
    - Si esta responde con un error, se le informa al usuario.
    - Si esta responde con un estado 200, se guarda el token en una cookie para ser utilizado más adelante.

En este punto, la aplicación valida que el usuario esté logeado y, si lo está, retorna la tabla de transportistas.

La tabla de transportistas, mediante un useEffect(), gatilla la función "getShippers()" (POST) contra la API, con el token que previamente seteamos en cookies, y devuelve la lista de transportistas.

Al clickear en una fila, se setea el transportista seleccionado y se gatilla la funcion "getShipperById()", con el ID del transportista que seleccionamos.
    -Si esta responde con un error, se le informa al usuario
    -Si esta responde con un estado 200, se devuelve un modal con un formulario para editar los datos del transportista.

Al editar el modal, se setean los valores en un nuevo estado. Si se clickea en el botón "Guardar", se gatilla la funcion "editShipper()", que realiza un POST con los datos modificados (o no) que tenemos en el estado del componente.
    -Si esta responde con un error, se le informa al usuario.
    -Si esta responde con un estado 200, se ejecuta un alert() para informar al usuario, se cierra el modal, y se ejecuta nuevamente la función "getShippers()" para traer los datos actualizados.

Al clickear el botón Logout, se elimina la cookie, se refresca la página y vuelve a retornarse el Login.

# Levantar el servidor:
npm install --exact
npm start

# Posibles mejoras:
- Loaders en cada petición a la API, a fin de mejorar la UX.
- Validación al editar transportista. Checkear que los datos efectivamente hayan sido modificados, de lo contrario no ejecutar la función.
- Input tipo Select para editar la calificación del transportista.
- Snackbars/Toasts a fin de notificar al usuario los resultados de sus acciones.
- Especificar casos de error.
- Mejoras generales en la UI.

# Resta:
- Usar OAuth o librería similar para gestionar la sesión.
- En el modal, tabla con horarios y otros datos del transportista.
- Protejer variables de entorno.
- Botón Actualizar.

# Conclusiones:
Aplicación altamente escalable. Componentes modularizados con el patrón Atomic Design. UI construida con Material UI, a fin de economizar tiempo y lograr una interfaz moderna y amigable con el usuario. Peticiones asíncronas con Axios.

A fines de prueba técnica, considero lo hecho suficiente para validar mis habilidades.

Con un poco más de trabajo, sería una aplicación lista para producción.