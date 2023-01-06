import { createServer } from "http";
import app from "./app";
import config from "./config";
import logger from "./middlewares/logger";
import connectDatabase from "./database";

(async () => {
  await connectDatabase();

  const server = createServer(app.callback());

  server.listen(config.API_PORT, () => {
    logger.info(
      `GraphQL Server running on http://localhost:${config.API_PORT}/graphql`,
    );
  });
})();
