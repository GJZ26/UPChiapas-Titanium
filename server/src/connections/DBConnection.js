import { Sequelize } from 'sequelize'
import dtenv from 'dotenv'
import { log } from '../utilities/BeautyLogs.js'
import config from '../utilities/Yaml.js'
import { argv } from 'node:process'

dtenv.config()

const db = new Sequelize(config.database.name, process.env["USER_DB"], process.env["PASSWORD_DB"], {
    host: config.database.host,
    dialect: 'mysql',
    port: config.database.port,
    logging: argv.includes("dev")
})

try {
    db.authenticate()
    log('\t    Autenticación exitosa', 'blue')
} catch (e) {
    console.error("No se pudo conectar a la base de datos")
}

export default db