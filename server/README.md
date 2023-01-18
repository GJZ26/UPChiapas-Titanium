# Up Titanium - Server

<!-- 
    Cualquier contribución se agradece
 -->

**Documentación para la versión** 2.0.0-dev

Bienvenido al **Server Side de Titanium**.

Inicio Rápido
---

Estos son los recursos necesarios para levantar y/o modificar los archivos que hacen funcionar el backend del proyecto de Titanium.

**Antes de comenzar**: Este proyecto funciona con **Node Js**, recuerda tener instalado la versión más nueva para ejecutar el proyecto.

**Nota**: Este proyecto usa base de datos **MySQL** para almacenar información, asegúrate de tener instalados y en ejecución todos los servicios necesarios antes de arrancar el servidor. Te recomendamos crear una base de datos dedicada para el proyecto.

Para ejecutar el proyecto:
* Abra una nueva terminal es este directorio, asegurate de estar en la carpeta `/server` (al mismo nivel de este archivo). Puedes verificar esto con el comando `pwd`.

* Instala las dependencias necesarias con `npm install`.

* Cree un archivo **.env** para almacenar las credenciales para acceder a tu base de datos, mira cómo hacerlo [aquí](#env)

* Ejecute `npm start` para levantar el servidor o `npm run dev` para arrancar el mismo servidor con nodemon.

**Nota**: En caso de no tener instalado nodemon, ejecute `npm install -g nodemon`

## Contenido
1. [Directorios](#directorios)
    1. [Connections](#connections)
    2. [Documentation](#documentation)
    3. [Models](#models)
    4. [Public](#public)
    5. [Resources](#resources)
    6. [Routes](#routes)
    7. [Services](#services)
    8. [Utilities](#utilities)
2. [Archivos](#archivos)
    1. [Server.js](#serverjs)
    2. [.env](#env)
    3. [Server-config.yml](#server-configyml)
        1. [application](#application)
        2. [database](#database)
        3. [internal_resources](#internal_resources)
        4. [external_resources](#external_resources)

---

## Directorios
Los directorios están distribuidos de la siguiente forma para su mejor escalabilidad, mantenimiento y depuración.

En esta sección te describiremos qué almacena cada directorio dentro de la carpeta `src/`.

### Connections/
Guarga el script que hacen conexión a la base datos especificada en el [archivo de configuración](#server-configyml).

### Documentation/
Almacena los archivo **html** que se muestran en la ruta de documentación del servidor

### Models/
Contiene los scripts que definen las entidades que se almacenarán en la base de datos.

### Public/
En este directorio se almacenará la información pública de los usuarios o contenidos multimedia. 

Por defecto, los archivos de este directorio se puede acceder a través de la ruta `http://localhost:port/content/` desde cualquier cliente.

Se puede cambiar el nombre de la carpeta que se desea hacer pública y la ruta de acceso desde el [archivo de configuración](#server-configyml) en la opción `path` y `folder` de la sección [`external_resources`](#external_resources).

### Resources/
En este directorio se almacenan contenido que se usará dentro del servidor, como hoja de estilos, scripts, íconos, etcétera.

Por defecto, se podrá acceder mediante la ruta `http://localhost:port/internal/` y al igual que el directorio [public/](#public), se puede cambiar el nombre de la carpeta que desea hacer pública y la ruta de acceso desde el [archivo de configuración](#server-configyml) en la opción `path` y `folder` de la sección [`internal_resources`](#internal_resources).

### Routes/
En esta carpeta se hallan los scripts que definen las rutas que tendrán los [servicios](#services).

### Services/
En este directiorios viven los scripts que tratan y sirven la información consultada.

### Utilities/
Aquí se alojan los módulos que se usan en más de un servicio o dentro del mismo [**Server.js**](#serverjs).

Puede contener script importantes para funcionar, como módulos de lecturas de configuración, u otros más estéticos, como estilizado de impresiones por consola.

---

## Archivos
La mayor parte de los scripts poseen documentación para explicar qué hacen y cómo usarlos. 

Sin embargo hay archivos adicionales que son igual importantes y se deben dar una descripción de su funcionamento más detallado.
### Server.js
Este es el archivo principal del servidor, importa los enrutadores, inicializa el servidor y lo configura de acuerdo a tu preferencia. Se pretende que este archivo no sea modificado con regularidad.

### .env
Los archivos **.env** son usados para definir variables de entorno del servidor, por defecto (y por seguridad) no se indexan en git.

Este archivo se localiza en la ruta raíz del proyecto del server (al mismo nivel de este README), y en este proyecto, almacena las credenciales de tu base de datos.

El archivo **.env** deberá tener el siguiente contenido:
~~~
USER_DB="Usuario de tu base de datos"
PASSWORD_DB="Contraseña del usuario"
~~~
Una vez hecho este paso, su servidor deberá conectarse correctamente a la base de datos configurada en el [archivo de configuracion](#server-configyml).

### server-config.yml
En este archivo se definen las configuraciones del servidor, como nombre de la base de datos, carpeta públicas, etc.

Este archivo está dividido por secciones que lucen así:
```yml
seccion:
  configuración1: algo
  configuración2: otro algo

seccion2:
  configuración1: algo
  configuración2: otro algo
```

Cada sección contiene las configuraciones necesarias para algo en específico.

#### **application**
Esta sección configura las características básicas del programa

```yml
application:
  version: 2.0.0-dev
  port: 3000
```

**Configuraciones**:
* **version**: Número de versión del proyecto, la misma que se imprime por consola al momento de iniciar el proyecto y al hacer una petición al home de la aplicación.
* **port**: Puerto dónde se levantará el proyecto, en caso de no saber que puerto tienes disponibles, se puede asignar el número 0 para usar un puerto efímero (Experimental, puede ocasionar fallas en algunas rutas).


#### **database**
Esta sección configura la base de datos que usará el proyecto para almacenar la información

```yml
database:
  name: titanium
  host: localhost
  port: 3306
```

**Configuraciones**:
* **name**: Nombre de la base de datos dónde se crearán las tablas necesarias para el funcionamiento del proyecto. Esta base de datos debe ser creada manualmente antes de configurarla en este documento.
* **host**: Host o IP donde se aloja tu base de datos, en caso se trabajar en un entorno local, no es necesario modificar esta configuración
* **port**: Puerto donde se está ejecutando el servicio de MySQL, por defecto, viene montado en el puerto 3306, en caso de tenerlo en otro puerto, puedes modificarlo en esta configuración

#### **internal_resources**
Esta sección configura las carpetas que se usarán para exponer recursos internos del servidor, como archivos css, js, html, íconos, etc.

```yml
internal_resources:
  folder: resources
  path: internal
```

**Configuraciones**:
* **folder**: Carpeta dentro del directorio `src/` que será expuesta
* **path**: Ruta por donde se accederá a los recursos expuestos, ej. `http://localhost:port/path`

#### **external_resources**
Esta sección configura las carpetas que se usarán para exponer recursos de los usuarios, como fotos de perfil, fotos de publicaciones, etc.

```yml
external_resources:
  folder: resources
  path: internal
```

**Configuraciones**:
* **folder**: Carpeta dentro del directorio `src/` que será expuesta
* **path**: Ruta por donde se accederá a los recursos expuestos, ej. `http://localhost:port/path`