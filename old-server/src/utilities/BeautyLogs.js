const font_colors = {
    "black":"\x1b[30m",
    "red":"\x1b[31m",
    "green":"\x1b[32m",
    "yellow": "\x1b[33m",
    "blue": "\x1b[34m",
    "magenta":"\x1b[35m",
    "cyan":"\x1b[36m",
    "white":"\x1b[37m",
    "default": ""
}

const font_styles = {
    "reset": "\x1b[0m",
    "bold": "\x1b[1m",
    "dim": "\x1b[2m",
    "underscore": "\x1b[4m",
    "reverse": "\x1b[7m",
    "hidden": "\x1b[8m",
    "default": ""
}

const bg_colors = {
    "black": "\x1b[40m",
    "red": "\x1b[41m",
    "green": "\x1b[42m",
    "yellow": "\x1b[43m",
    "blue": "\x1b[44m",
    "magenta": "\x1b[45m",
    "cyan": "\x1b[46m",
    "white": "\x1b[47m",
    "default": "",
}

/**
 * Print message stilished
 * @param {String} message Message to display
 * @param {String} font_color Text color
 * @param {String} font_style Text decoration
 * @param {String} bg_color Background text color
 */
export function log(message, font_color = "default", font_style = "default", bg_color = "default") {
    console.log(font_colors[font_color.toLowerCase().trim()],
        font_styles[font_style.toLowerCase().trim()],
        bg_colors[bg_color.toLowerCase().trim()], message, font_styles["reset"])
}
