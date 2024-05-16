/**
 * Object containing ANSI color escape sequences for styling console output.
 * @type {Object}
 */
module.exports = {
    /**
     * ANSI color escape sequence for error messages (red).
     * @type {string}
     */
    error: '\x1b[31m',
    /**
     * ANSI color escape sequence for warning messages (yellow).
     * @type {string}
     */
    warn: '\x1b[33m',
    /**
     * ANSI color escape sequence for info messages (green).
     * @type {string}
     */
    info: '\x1b[32m',
    /**
     * ANSI color escape sequence for debug messages (white).
     * @type {string}
     */
    debug: '\x1b[37m',
    /**
     * ANSI color escape sequence for timestamp (dark gray).
     * @type {string}
     */
    time: '\x1b[90m',
    /**
     * ANSI color escape sequence for resetting text color.
     * @type {string}
     */
    reset: '\x1b[0m',
    /**
     * ANSI color escape sequence for magenta text.
     * @type {string}
     */
    magenta: '\x1b[35m',
    /**
     * ANSI color escape sequence for type text (red).
     * @type {string}
     */
    type: '\x1b[91m',
    /**
     * ANSI color escape sequence for black text.
     * @type {string}
     */
    black: '\x1b[30m',
    /**
     * ANSI color escape sequence for white text.
     * @type {string}
     */
    white: '\x1b[37m',
    /**
     * ANSI color escape sequence for splitting different parts of log messages (cyan).
     * @type {string}
     */
    split: '\x1b[36m',
    /**
     * ANSI color escape sequence for aqua text.
     * @type {string}
     */
    aqua: '\x1b[96m'
};
