import config from "../utilities/Yaml.js"

export const home = (req, res) => {
    if (req.headers['user-agent'].includes("Mozilla")){
        res.sendFile(`${process.cwd()}/src/documentation/welcome.html`)
        return
    }
    res.json({
        message: "Bievenidos a la API de UP Titanium",
        documentation: `http://${config.database_host}:${config.default_port}/doc`,
        version:config.application.version,
    })
}