import mongoose from "mongoose";
import config from "config";

// Logger
import Logger from "../config/logger";

async function connect() {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    Logger.info("DB Connected");
  } catch (e) {
    Logger.error(`Could not connect to db`);
    Logger.error(`Error: ${e}`);
    process.exit(1);
  }
}

export default connect;
