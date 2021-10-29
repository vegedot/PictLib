import { join, normalize } from "path";

export const migrations = {
  // "0.1.0": (store: ElectronStore): void => {
  // migration methods
  // store.set("window.position", [0, 0]);
  // store.set("window.size", [800, 600]);
  // store.set("database.path", join(userDataPath, "Database"));
  // }
};

export const defaultconfig = (userDataPath: string, picturesPath: string): Record<string, unknown> => {
  return {
    window: {
      position: [0, 0],
      size: [800, 600]
    },
    database: {
      path: normalize(join(userDataPath, "Database"))
    },
    pictures: {
      path: normalize(join(picturesPath, "PictLib"))
    }
  };
};

export interface IConfig {
  window: {
    position: number[];
    size: number[];
  };
  database: {
    path: string;
  };
  pictures: {
    path: string;
  };
}
