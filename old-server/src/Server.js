import express from 'express'
import DocRouter from './routes/DocRouter.js';
import { log } from './utilities/BeautyLogs.js';
import favicon from 'serve-favicon'
import CareerRouter from './routes/CareerRouter.js';
import GroupRouter from './routes/GroupRouter.js';
import RootRouter from './routes/RootRouter.js';
import SubjectRouter from './routes/SubjectRouter.js';
import TeacherRouter from './routes/TeacherRouter.js';
import GeneralRouter from './routes/GeneralRouter.js';
import StudentRouter from './routes/StudentRouter.js';
import config from './utilities/Yaml.js'

// Aplicativo
const app = express();

// Configuración
const port = config.application.port
const version = config.application.version

const internalRoute = config.internal_resources.path
const internalFolder = config.internal_resources.folder

const externalRoute = config.external_resources.path
const externalFolder = config.external_resources.folder

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