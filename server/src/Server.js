import express from 'express'
import DocRouter from './routes/DocRouter.js';
import config from './server-config.json' assert {type: 'json'}
import { log } from './utilities/BeautyLogs.js';
import favicon from 'serve-favicon'
import CareerRouter from './routes/CareerRouter.js';
import GroupRouter from './routes/GroupRouter.js';
import RootRouter from './routes/RootRouter.js';
import SubjectRouter from './routes/SubjectRouter.js';
import TeacherRouter from './routes/TeacherRouter.js';
import GeneralRouter from './routes/GeneralRouter.js';
import StudentRouter from './routes/StudentRouter.js';

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
app.use("/",GeneralRouter)
app.use("/doc",DocRouter)
app.use("/career",CareerRouter)
app.use("/group",GroupRouter)
app.use("/admin",RootRouter)
app.use("/student",StudentRouter)
app.use("/subject",SubjectRouter)
app.use("/teacher",TeacherRouter)

// Accesos públicos
app.use(`/${internalRoute}`, express.static(`src/${internalFolder}`))
app.use(`/${externalRoute}`, express.static(`src/${externalFolder}`))

const server = app.listen(port, () => {
    log(`\t\tUP Titanium`,"yellow","bold")
    log(`  Versión de la aplicación: ${version}`)
    log(`Servidor a la escucha en el puerto ${server.address().port}`,"default","bold")
    log(`\thttp://localhost:${server.address().port}/doc`,"blue")
})