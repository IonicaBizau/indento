/**
 * indento
 * Indents the input string.
 *
 * @name indento
 * @function
 * @param {String} input The input string.
 * @param {Number} width The indent width.
 * @param {String} char The character to use for indentation (default: `" "`).
 * @return {String} The indented string.
 */
function indento(input, width, char) {
    char = typeof char !== "string" ? " " : char;
    return String(input).replace(/^/gm, char.repeat(width));
}

module.exports = indento;
