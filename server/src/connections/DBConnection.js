import { Sequelize } from 'sequelize'
import config from '../server-config.json' assert {type: "json"}
import dtenv from 'dotenv'
import { log } from '../utilities/BeautyLogs.js'

dtenv.config()

const db = new Sequelize(config.database_name, process.env["USER_DB"], process.env["PASSWORD_DB"], {
    host: config.database_host,
    dialect: 'mysql'
})

try {
    db.authenticate()
    log('\t    Autenticación exitosa','blue')
} catch (e) {
    console.error("No se pudo conectar a la base de datos")
}

export default db