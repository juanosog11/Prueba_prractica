ReadMe Frontend

Este README describe la interfaz de usuario (UI) del proyecto. La UI se basa en React y se comunica con la API a través de Axios.

Configuración

Para instalar las dependencias de Node.js, ejecuta el comando:

npm install
Para ejecutar la aplicación, ejecuta el comando:

npm run dev
Esto abrirá la aplicación en el navegador en la dirección http://localhost:3000.

Importar la API

La API se importa en el archivo config.js, que se encuentra en la carpeta react/src. Este archivo también contiene las variables de entorno que se utilizan para configurar la conexión con la API.

La API también se puede importar en el archivo api/axios.js, que se encuentra en la misma carpeta. Este archivo proporciona funciones para realizar peticiones a la API.

Direcciones de las páginas

La aplicación tiene las siguientes páginas:

Home: La página de inicio, que muestra el título de la empresa.
Login: La página de inicio de sesión.
Register: La página de registro.
Agendar: La página para agendar un servicio.
Servicios: La página para ver los servicios agendados.
Agendar/:id: La página para editar un servicio agendado.
Profile: La página para ver el perfil del usuario.