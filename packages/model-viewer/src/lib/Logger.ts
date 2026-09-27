export enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
}

type LogLevelString = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

export interface LoggerConfig {
    minLevel: LogLevel;
    isProduction: boolean;
    serviceName?: string;
}

export interface LogMeta {
    [key: string]: unknown;
}

export class CustomLogger {
    private minLevel: LogLevel;
    private isProduction: boolean;
    private serviceName: string;

    private browserStyles = {
        reset: '\x1b[0m',
        gray: '\x1b[90m',
        debug: '\x1b[36m', // Cyan
        info: '\x1b[32m', // Green
        warn: '\x1b[33m', // Yellow
        error: '\x1b[31m', // Red
    };

    private terminalColors = {
        reset: 'color: inherit; font-weight: normal;',
        gray: 'color: #7f8c8d; font-weight: normal;',
        debug: 'color: #00bcd4; font-weight: bold;', // Cyan
        info: 'color: #2ecc71; font-weight: bold;', // Green
        warn: 'color: #f1c40f; font-weight: bold;', // Yellow
        error: 'color: #e74c3c; font-weight: bold;', //
    };

    constructor(config: Partial<LoggerConfig> = {}) {
        // 1. Safely extract Vite's meta env object if running in a browser bundle
        const viteEnv = typeof window !== 'undefined' && (import.meta as any).env ? (import.meta as any).env : {};

        // 2. Evaluate settings, falling back to manual configurations or defaults
        this.isProduction = config.isProduction ?? !!viteEnv.PROD;
        this.serviceName = config.serviceName ?? viteEnv.VITE_SERVICE_NAME ?? 'shared-control';

        const envLevel = config.minLevel !== undefined ? null : (viteEnv.VITE_LOG_LEVEL ?? 'INFO').toUpperCase();

        this.minLevel = config.minLevel ?? LogLevel[envLevel as LogLevelString] ?? LogLevel.INFO;
    }

    private log(level: LogLevel, levelLabel: LogLevelString, message: string, meta?: LogMeta) {
        if (level < this.minLevel) return;

        const timestamp = new Date().toLocaleTimeString();
        const metaString = meta && Object.keys(meta).length ? `\n${JSON.stringify(meta, null, 2)}` : '';
        const lowercaseLabel = levelLabel.toLowerCase() as 'debug' | 'info' | 'warn' | 'error';

        // Check if we are running in a Web Browser environment
        const isBrowser = typeof window !== 'undefined';

        if (isBrowser) {
            // Firefox & Chrome compatibility: Use segregated parameters for CSS styling
            const labelStyle = this.browserStyles[lowercaseLabel];
            const grayStyle = this.browserStyles.gray;

            console.log(
                `%c[${timestamp}] %c[${levelLabel}] %c[${this.serviceName}]:`,
                grayStyle,
                labelStyle,
                grayStyle,
                `${message}${metaString}`,
            );
        } else {
            // Node.js Terminal environment: Fall back to your ANSI escape sequences
            const color = this.terminalColors[lowercaseLabel];
            const gray = this.terminalColors.gray;
            const reset = this.terminalColors.reset;

            console.log(
                `${gray}[${timestamp}]${reset} ` +
                    `${color}${levelLabel.padEnd(5)}${reset} ` +
                    `[${this.serviceName}] ${message}${metaString}`,
            );
        }
    }

    public debug(message: string, meta?: LogMeta) {
        this.log(LogLevel.DEBUG, 'DEBUG', message, meta);
    }

    public info(message: string, meta?: LogMeta) {
        this.log(LogLevel.INFO, 'INFO', message, meta);
    }

    public warn(message: string, meta?: LogMeta) {
        this.log(LogLevel.WARN, 'WARN', message, meta);
    }

    public error(message: string, error?: Error | unknown, meta?: LogMeta) {
        const errorMeta: LogMeta = { ...meta };
        if (error instanceof Error) {
            errorMeta.error = {
                name: error.name,
                message: error.message,
                stack: error.stack,
            };
        } else if (error) {
            errorMeta.error = error;
        }
        this.log(LogLevel.ERROR, 'ERROR', message, errorMeta);
    }
}
