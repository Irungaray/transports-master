# Veamos un poco el código.

En index.js se ejecuta el ReactDOM.render(), con el Theme Provider de MUI y el App.js.

App.js se encarga del estado de la sesión. Valida que el Login haya sido realizado y setea el token en cookies para bajarlo por props a otros componentes.

Los componentes principales son <LoginForm /> y <ShippingTable />.

<LoginForm />, con los valores de usuario y contraseña preestablecidos, ejecuta el inicio de sesión y, por la función setToken() que le llega por props desde App.js, hace lo propio.

De acá pasamos a <ShippingTable />, donde se nos muestra nuevamente el Header pero esta vez con un botón para cerrar sesión.

Con un input de búsqueda, y haciendo uso de las tablas y la paginación que nos ofrece MUI, inmediatamente hacemos un POST para obtener los transportistas y los renderizamos en pantalla.

Al clickear en una fila, se nos muestra un modal listo para editar al transportista que seleccionamos.

Los demás átomos y moléculas que se muestran en el explorer, son los componentes que reutilizaríamos a lo largo de la aplicación en caso de que escale.