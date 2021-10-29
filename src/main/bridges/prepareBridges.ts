import ElectronStore from "electron-store";
import { prepareConfig } from "./config/configBridge";
import { prepareDatabase } from "./database/databaseBridge";

// TODO: Error handler
const prepareBridges = async (userDataPath: string, picturesPath: string): Promise<void> => {
  let config!: ElectronStore;
  // Config
  await prepareConfig(userDataPath, picturesPath).then((result) => {
    config = result;
  });
  // Database
  const databasePath = (config.get("database.path") as string) || "";
  await prepareDatabase(databasePath);
};

export default prepareBridges;
