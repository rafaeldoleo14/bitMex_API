# Card_API

<h3>Tecnologias y habilidades utilizadas BACKEND:</h3> 
Node JS, Express JS, Typescript, MYSQL, Sequelize (ORM), DRY, SOLID

<h3>Informacion de lo realizado:</h3> 
CRUD de anuncios de la data de bitmex.

Incluye:

<ul>
    <li>Visualizacion de todos los anuncios</li>
    <li>Visualizacion de un solo anuncio</li>
    <li>Agregado de los anuncios</li>
    <li>Actualizacion de un anuncio</li>
    <li>Eliminacion de un anuncio</li>
    <li>Validaciones de cada uno de los campos con Express-Validator</li>
</ul>

<h3>Estructura carpetas:</h3>

Proposito:

<ul>
    <li>Routes: Donde estan cada una de las rutas que se conectan con los controladores.</li>
    <li>Controllers: Cada controlador solo se encargara de recibir informacion y enviarla.</li>
    <li>Services: El servicio se encarga de la logica de negocio, asi los controladores no tienen tanta responsabilidades.</li>
    <li>Middlewares: Funciones que se encargan de validar antes de que se reciba la data</li>
    <li>Models: Modelo de la base de datos</li>
    <li>Config: Configuracion de la base de datos con Sequelize</li>
    <li>Interfaces: Interfaces que definan como sera la data</li>
    <li>Utils: Funciones exportables que respaldan el principio DRY</li>
</ul>

<h3>Como Correr el proyecto:</h3>

Pasos:

<ol>
    <li>Descargar proyecto del link del repositorio: https://github.com/rafaeldoleo14/bitMex_API.git</li>
    <li>Installar modulos de node: npm install</li>
    <li>Ejecutar comando modo desarrollo: npm run dev</li>
    <li>OJO: tiene que cambiar las variables de entorno para poder correrlo en su maquina.</li>
</ol>

Nota:

<ol>
    <li>Necesita tener Mysql instalado, y poner sus credenciales en las variables de entorno para poder correr el proyecto</li>
</ol>
