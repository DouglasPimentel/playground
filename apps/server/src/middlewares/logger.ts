import pino from "pino";
import config from "../config";

const ENV = config.NODE_ENV;
let logger: pino.Logger;

const devOptions: pino.LoggerOptions = {
  level: "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
};

if (ENV === "production" || ENV === "test") {
  logger = pino();
} else {
  logger = pino(devOptions);
}

export default logger;
