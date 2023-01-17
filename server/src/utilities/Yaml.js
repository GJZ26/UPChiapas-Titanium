import yaml from 'yaml-js'
import fs from 'fs'

const config = yaml.load(fs.readFileSync(`${process.cwd()}/src/server-config.yml`, "utf-8"))

export default config
