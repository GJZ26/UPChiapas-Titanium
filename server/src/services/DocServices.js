import info from '../server-config.json' assert {type:"json"}

export const home = (req,res) =>{
    res.sendFile(`${process.cwd()}/src/documentation/principal-doc.html`)
}

export const version = (req,res) => {
    res.send({version:info.application_version})
}