import express from 'express'
import DocRouter from './routes/DocRouter.js';
import config from './server-config.json' assert {type: 'json'}

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
console.log("\x1b[1m","\x1b[33m","\tTitanium Console","\x1b[0m", `v${version}`)
    console.log(`Servidor a la escucha en el puerto ${port}
    `,"\x1b[34m",`http://localhost:${port}/`)
})