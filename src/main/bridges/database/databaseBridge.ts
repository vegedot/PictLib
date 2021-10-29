import { Database } from "@leafac/sqlite";
import { join } from "path";
import { access } from "fs/promises";
import { mkdirSync } from "fs";
import migration from "./migration";

// Bridge Variables
let database: Database;

// Prepare Function ============================================================
export async function prepareDatabase(databasePath: string): Promise<void> {
  // prepare directory
  await access(databasePath).catch(() => {
    mkdirSync(databasePath);
  });

  // create databse
  database = new Database(join(databasePath, "pictures.db"));

  // migration database
  migration(database);
}

// Bridge ======================================================================
const DatabaseBridge: IDatabaseBridge = {
  migration: (): void => migration(database)
};

export interface IDatabaseBridge {
  migration: () => void;
}

export default DatabaseBridge;
