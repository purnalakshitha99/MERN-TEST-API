import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import "dotenv/config";
import { connect } from "./utils/database.connection";

const app = express();
const PORT = process.env.PORT || "8090";

app.use(cors());
app.use(express.json({ limit: "20mb" }));

app.get("/", (req, res, next) => {
  res.send("<h1>Library management system</h1>");
  next();
});

app.listen(PORT, () => {
  logger.info(`server is up and runnign on PORT ${PORT} `);
  connect();
});
