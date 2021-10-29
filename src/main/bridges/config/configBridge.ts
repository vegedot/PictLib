import ElectronStore from "electron-store";
import { defaultconfig, migrations } from "./config";

// Bridge Variables
let config: ElectronStore;

// Prepare Function ============================================================
export async function prepareConfig(userDataPath: string, picturesPath: string): Promise<ElectronStore> {
  return new Promise((resolve) => {
    config = new ElectronStore({
      defaults: defaultconfig(userDataPath, picturesPath),
      migrations: migrations
    });
    resolve(config);
  });
}

// Bridge ======================================================================
const ConfigBridge: IConfigBridge = {
  set: (key: string, value: unknown): void => config.set(key, value),
  get: (key: string): unknown => {
    return config.get(key);
  }
};

export interface IConfigBridge {
  set: (key: string, value: unknown) => void;
  get: (key: string) => unknown;
}

export default ConfigBridge;
