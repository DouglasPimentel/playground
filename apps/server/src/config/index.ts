import dotev from "dotenv";

dotev.config();

const config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  API_PORT: process.env.API_PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || "shh",
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/test",
};

export default config;
