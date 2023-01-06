import config from '../server-config.json' assert {type: "json"}

export const home = (req, res) => {
    if (req.headers['user-agent'].includes("Mozilla")){
        res.sendFile(`${process.cwd()}/src/documentation/welcome.html`)
        return
    }
    res.json({
        message: "Bievenidos a la API de UP Titanium",
        documentation: `http://${config.database_host}:${config.default_port}/doc`,
        version:config.application_version,
    })
}