# Up Titanium - Server
<!-- 
Si concideran pertinente y necesario, actualicen y corrijan este documento :)
 -->
**Documentación para la versión** 1.0.0-dev

Bienvenido al Server Side de **Titanium**.

Antes de comenzar, configura tus variables de entorno, aprende cómo hacerlo [aquí](#env).

Para ejecutar el proyecto, abra su terminal, asegurate de estar en la carpeta `/server` (al mismo nivel de este archivo).

Puedes verificar esto con el comando `pwd`.

Instala las dependencias necesarias con `npm install`.

Ejecute `npm start` para levantar el servidor o `npm run dev` para arrancar el mismo servidor con nodemon.

En caso de no tener instalado nodemon, ejecute `npm install -g nodemon`

## Contenido
1. [Directorios](#directorios)
    1. [Connections](#connections)
    2. [Models](#models)
    3. [Public](#public)
    4. [Resources](#resources)
    5. [Routes](#routes)
    6. [Services](#services)
2. [Archivos](#archivos)
    1. [Server.js](#serverjs)
    2. [.env](#env)
    3. [Server-config.json](#server-configjson)

## Directorios
Los directorios están distribuidos de la siguiente forma para su mejor escalabilidad, mantenimiento y depuración.

En esta sección te describiremos qué almacena cada directorio.

### Connections/
Guarga el script que hacen conexión a la base datos especificada en el [archivo de configuración](#server-configjson).

### Models/
Contiene los scripts que definen las entidades que se almacenarán en la base de datos.

### Public/
En este directorio se almacenará la información pública de los usuarios o contenidos multimedia. 

Los archivos de este directorio se puede acceder a través de la ruta `http://localhost:port/content/` desde cualquier cliente.

Se puede cambiar el nombre de la carpeta que se desea hacer pública y la ruta de acceso desde el [archivo de configuración](#server-configjson) con la opción `external_resources_route` y/o `external_resources_path`.

### Resources/
En este directorio se almacenan contenido que se usará dentro del servidor, como hoja de estilos, scripts, iconos, etcétera.

Se podrá acceder mediante la ruta `http://localhost:port/server-files/` y al igual que el directorio [public/](#public), se puede cambiar el nombre de la carpeta que se desea hacer pública y la ruta de acceso desde el [archivo de configuración](#server-configjson) con la opción `internal_resources_route` y/o `internal_resources_path`.

### Routes/
En esta carpeta se hallan los scripts que definen las rutas que tendrán los [servicios](#services).

### Services/
En este directiorios viven los scripts que tratan y sirven la información consultada.

## Archivos
La mayor parte de los scripts poseen documentación para explicar qué hacen y cómo usarlos. 

Sin embargo hay archivos adicionales que son igual importantes y se deben dar una descripción de su funcionamento más detallado.
### Server.js
Este es el archivo principal del servidor, importa los enrutadores, inicializa el servidor y lo configura de acuerdo a tu preferencia. Por sentido común, **NINGÚN** parche debería aplicarse acá.
### .env
Los archivos **.env** son usados para definir variables de entorno del servidor, por defecto (y por seguridad) no se indexan en git.

Este archivo se localiza en la ruta raíz del proyecto del server (al mismo nivel de este README), y en este proyecto, almacena las credenciales de tu base de datos.

El archivo **.env** deberá tener el siguiente contenido:
~~~
USER_DB="Usuario de tu base de datos"
PASSWORD_DB="Contraseña del usuario"
~~~
Una vez hecho este paso, su servidor deberá conectarse correctamente a la base de datos configurada en el [archivo de configuracion](#server-configjson).
### Server-config.json
En este archivo se definen las configuraciones del servidor.

Es posible ejecutar el servidor sin tener que modificar las configuración por defecto, sin embargo, aquí está la lista de configuraciones y su descripción:
1. `application_version`: La versión del servidor, la que se imprime por consola al momento de ejecutar `npm start` o `npm run dev`. No se pretende que sea modificado por usted.

2. `default_port`: Puerto utilizado para levantar el servidor. Se puede asignar el valor 0 para levantar el servidor en un puerto efímero, en caso de no saber qué puertos tienes disponibles.

3. `internal_resources_route`: La ruta de acceso para obtener los archivos privados declarado en `internal_resources_folder`.

4. `internal_resources_folder`: Nombre de la carpeta que se desea exponer para almacenar contenido de uso interno del servidor. Su punto de acceso se define en `internal_resources_route`.

5. `external_resources_route`:  La ruta de acceso para obtener los archivos público declarado en `internal_resources_folder`.

6. `external_resources_folder`: Nombre de la carpeta que se desea hacer público para almacenar contenido de los usuarios y del frontend. Su punto de acceso se define en `external_resources_route`.

7. `database_name`: Nombre de la base de datos que se usará para la creación de la tabla y almacenar información.

8. `database_host`: DNS  o IP dónde se hospeda la base de datos del proyecto.

9. `database_port`: Puerto de servicion MySQL del servidor, por defecto y convención 3306.
