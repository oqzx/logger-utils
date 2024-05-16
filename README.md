# logger-utils
This is a customizable logger module built using Winston for logging functionality. It allows you to configure logging levels and customize log messages.

## Installation

To install this logger module, run the following command:

```sh
npm install @oqzx/logger-utils
```

## Usage

```js
const createLogger = require('@oqzx/logger-utils');

// Create logger instance with default configuration
const logger = createLogger();

logger.debug('Server', 'Debug message');
logger.info('API', 'Info message');
logger.warn('Client', 'Warning message');
logger.error('Host', 'Error message');
```

## Example Output

![Example Output](https://prnt.sc/8ltpP2EA6Ue8)

## Configuration Options

You can pass configuration options to customize the logger behavior:

- `debug`: Whether to log debug messages. Default is `true`.
- `info`: Whether to log info messages. Default is `true`.
- `warn`: Whether to log warning messages. Default is `true`.
- `error`: Whether to log error messages. Default is `true`.

Example:

```js
// Create logger instance with custom configuration
const logger = createLogger({ debug: true, info: true, warn: false, error: true });
```

## Log Format

The logger uses the following format for log messages:

```
[date] | [time] | [level] | [type]: [message]
```

- `date`: Date when the log message was generated.
- `timestamp`: Time when the log message was generated.
- `level`: Log level (DEBUG, INFO, WARN, ERROR).
- `type`: Type of log message.
- `message`: Log message content.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/oqzx/logger-utils/blob/main/LICENSE) file for details.
