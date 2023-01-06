import mongoose from "mongoose";
import config from "../config";
import logger from "../middlewares/logger";

export default async function connectDatabase() {
  mongoose.set("strictQuery", true);
  await mongoose
    .connect(`${config.MONGO_URI}`, { bufferCommands: false })
    .then(() => logger.info("Connect database"))
    .catch(error => logger.error("Error connecting to database", error));
}
