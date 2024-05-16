/**
 * Centers the given text within a specified width by adding padding.
 * @param {string} text - The text to center.
 * @param {number} width - The desired width of the centered text.
 * @returns {string} The centered text.
 */
function centerText(text, width) {
    const len = text.length;
    if (len >= width) {
        return text;
    }
    const leftPadding = Math.floor((width - len) / 2);
    const rightPadding = width - len - leftPadding;
    return ' '.repeat(leftPadding) + text + ' '.repeat(rightPadding);
}

module.exports = { centerText };
