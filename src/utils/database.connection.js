import mongoose, { connection, Connection } from "mongoose";
import config from "../configs";
import logger from "./logger";

let database;

const connect = async () => {
  const MONOGODB_URL = config.DB_CONNECTION_STRING;

  if (database) return;

  mongoose
    .connect(MONOGODB_URL)
    .then((Connection) => {
      database = connection;
      logger.info("database sysnced");
    })
    .catch((err) => {
      logger.error(err.message);
    });
};

export { connect };
