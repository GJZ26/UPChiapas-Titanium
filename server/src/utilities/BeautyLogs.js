const font_colors = {
    "yellow": "\x1b[33m",
    "blue": "\x1b[34m",
    "black":"\x1b[30m",
    "red":"\x1b[31m",
    "green":"\x1b[32m",
    "magenta":"\x1b[35m",
    "cyan":"\x1b[36m",
    "white":"\x1b[37m",
    "default": ""
}

const font_styles = {
    "bold": "\x1b[1m",
    "reset": "\x1b[0m",
    "default": ""
}

const bg_colors = {
    "default": ""
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
