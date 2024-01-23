
ReadMe Backend (API)

Esta API permite conectarnos a una base de datos SQL y comunicarnos con el front para guardar los datos solicitados.

Configuración

Para establecer la conexión con la base de datos, puedes editar el archivo src/config.js. En este archivo, encontrarás las variables de configuración de la base de datos. También puedes establecer estas variables de entorno.

onfiguración de CORS

La API admite el CORS (Cross-Origin Resource Sharing), que permite que las solicitudes de origen cruzado hagan peticiones a la API. Para configurar las direcciones que pueden hacer peticiones a la API, puedes editar el archivo src/app.js. En este archivo, encontrarás la siguiente línea:

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

Instalación

Para instalar las dependencias de Node.js, ejecuta el comando:

npm install
Ejecución

Para ejecutar la API, puedes usar el comando:

npm run dev (ejecuta con nodemon)
npm run start2 (ejecuta normal)
Esto ejecutará la API en el puerto 3000. Puedes cambiar este puerto editando el archivo src/config.js.

Prueba de conexión

Para probar la conexión con la base de datos, puedes usar el siguiente comando:

curl http://localhost:3000/api/ping
Este comando devolverá un mensaje de éxito si la conexión es correcta.

Rutas de autenticación

Las rutas de autenticación permiten a los usuarios registrarse, iniciar sesión, cerrar sesión y obtener sus datos.

/api/register: Crea un nuevo usuario.
/api/login: Inicia sesión con un usuario existente.
/api/logout: Cierra la sesión del usuario actual.
/api/profile: Devuelve los datos del usuario actual.
/api/verify: Verifica el token de autenticación.
Rutas de servicios

Las rutas de servicios permiten a los usuarios agendar y ver servicios.

/api/servicios: Devuelve una lista de todos los servicios agendados.
/api/agendar/:id: Devuelve un servicio específico por su ID.
/api/agendar: Crea un nuevo servicio.
/api/agendar/:id: Edita un servicio existente.
/api/servicios/:id: Borra un servicio.
Rutas de usuarios

Las rutas de usuarios permiten a los administradores ver y editar usuarios.

/api/usuarios: Devuelve una lista de todos los usuarios.
/api/register/email: Devuelve un usuario específico por su correo electrónico.
/api/register: Crea un nuevo usuario.
/api/usuarios/:email: Edita un usuario existente.
/api/usuarios/:email: Borra un usuario.