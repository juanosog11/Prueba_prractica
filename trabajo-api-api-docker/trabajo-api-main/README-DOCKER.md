docker-compose

verificar los puertos que uses de la base de datos,api y front.
cambiar el script que necesites de la base de datos(estructura) en esta lienal 

volumes:
      - ./src/db/base_script.sql:/docker-entrypoint-initdb.d/base_script.sql

seria asi
- <ubicacion dento de tu carpeta archivo .sql>:/docker-entrypoint-initdb.d/<nombre del archivo .sql>

en la api y en front establecer los dockerfile que se usan y donde estan ubicados 
mas los puertos

Dockerfile api

este copia el package.json de la carpeta raiz y ejecuta la intalacion 
copia los archivos de la api "copy /ser ./" y el babelrc "COPY /.babelrc ./"
le damos el puerto "EXPOSE 3000" y lo corremos "CMD ["npm", "run", "start"]"

Dockerfile server (base de datos)
se le establece el tipo, la contraseña y cual es su estructura

Dockerfile frontend

se establece la vercion, se cra una carpeta y se copia el package.json del front
lo instalamos y copiamos los arhivos del fron dandole tambien su puerto y corriendo
el front 