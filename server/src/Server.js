import express from 'express'
import DocRouter from './routes/DocRouter.js';
import config from './server-config.json' assert {type: 'json'}

// Console Styles
const std_bold = "\x1b[1m"
const std_yellow = "\x1b[33m"
const std_reset = "\x1b[0m"
const std_blue = "\x1b[34m"

// Aplicativo
const app = express();

// Configuración
const port = config.default_port
const version = config.application_version

const internalRoute = config.internal_resource_route
const internalFolder = config.internal_resource_folder

const externalRoute = config.external_resources_route
const externalFolder = config.external_resources_folder

// Enrutadores
app.use("/doc",DocRouter)

// Accesos públicos
app.use(`/${internalRoute}`, express.static(internalFolder))
app.use(`/${externalRoute}`, express.static(externalFolder))


app.listen(port, () => {
console.log(std_bold, std_yellow,"\tTitanium Console", std_reset, `v${version}`)
    console.log(`Servidor a la escucha en el puerto ${port}
    `,std_blue,`http://localhost:${port}/`)
})