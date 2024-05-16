const winston = require('winston');
const { format } = require('winston');
const colors = require('./helper/colors.js');
const { centerText } = require('./helper/centerText.js');

/**
 * Creates a logger instance with customizable configuration.
 * @param {Object} config - Configuration options for the logger.
 * @param {boolean} config.debug - Whether to log debug messages. Default is true.
 * @param {boolean} config.info - Whether to log info messages. Default is true.
 * @param {boolean} config.warn - Whether to log warning messages. Default is true.
 * @param {boolean} config.error - Whether to log error messages. Default is true.
 * @returns {Object} A logger instance.
 */
function createLogger(config = {}) {
    config = {
        debug: config.debug !== undefined ? config.debug : true,
        info: config.info !== undefined ? config.info : true,
        warn: config.warn !== undefined ? config.warn : true,
        error: config.error !== undefined ? config.error : true,
    };

    const logger = winston.createLogger({
        level: 'debug',
        format: format.combine(
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            format.printf(info => {
                const logColor = colors[info.level] || colors.info;
                const centeredLevel = centerText(info.level.toUpperCase(), 7);
                return `${colors.time}${info.timestamp.split(' ')[0]}${colors.split} | ${colors.magenta}${info.timestamp.split(' ')[1]}${colors.split} | ${logColor}${centeredLevel}${colors.split} | ${colors.reset}${colors.type}[${info.type || 'undefined'}]${colors.reset}: ${colors.aqua}${info.message}${colors.reset}`;
            })
        ),
        transports: [
            new winston.transports.Console()
        ]
    });

    Object.keys(config).forEach(level => {
        if (config[level]) {
            logger[level.toLowerCase()] = function(type, message) {
                logger.log({ level: level, type: type, message: message });
            };
        } else {
            logger[level.toLowerCase()] = function() {};
        }
    });

    return logger;
}

module.exports = createLogger;
