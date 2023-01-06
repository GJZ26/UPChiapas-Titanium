import express from 'express'
import DocRouter from './routes/DocRouter.js';
import config from './server-config.json' assert {type: 'json'}
import GeneralRoutes from './routes/GeneralRouter.js';
import StudentRoutes from './routes/StudentRouter.js';
import { log } from './utilities/BeautyLogs.js';
import favicon from 'serve-favicon'

// Aplicativo
const app = express();

// Configuración
const port = config.default_port
const version = config.application_version

const internalRoute = config.internal_resources_route
const internalFolder = config.internal_resources_folder

const externalRoute = config.external_resources_route
const externalFolder = config.external_resources_folder

// Configuración del server
app.use(favicon(`${process.cwd()}/src/resources/images/favicon.jpg`))

// Enrutadores
app.use("/",GeneralRoutes)
app.use("/doc",DocRouter)
app.use("/students", StudentRoutes)

// Accesos públicos
app.use(`/${internalRoute}`, express.static(`src/${internalFolder}`))
app.use(`/${externalRoute}`, express.static(`src/${externalFolder}`))

const server = app.listen(port, () => {
    log(`\t\tUP Titanium`,"yellow","bold")
    log(`  Versión de la aplicación: ${version}`)
    log(`Servidor a la escucha en el puerto ${server.address().port}`,"default","bold")
    log(`\thttp://localhost:${server.address().port}/doc`,"blue")
})