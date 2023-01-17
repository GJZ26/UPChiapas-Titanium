import config from "../utilities/Yaml.js"

export const home = (req,res) =>{
    res.sendFile(`${process.cwd()}/src/documentation/principal-doc.html`)
}

export const version = (req,res) => {
    res.send({version:config.application.version})
}