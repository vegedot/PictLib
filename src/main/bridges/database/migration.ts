import { Database, sql } from "@leafac/sqlite";

const migrations = [
  (database: Database): void => {
    database.execute(
      sql`
        CREATE TABLE "pictures" (
          "id" INTEGER PRIMARY KEY AUTOINCREMENT,
          "file_path" TEXT,
          "url" TEXT
        );
      `
    );
  },
  (): void => {
    // v2 excecution here
  }
];

const migration = (database: Database): void => {
  database.executeTransaction(() => {
    for (const migration of migrations.slice(database.pragma("user_version", { simple: true }))) {
      migration(database);
    }
    database.pragma(`user_version = ${migrations.length}`);
  });
};

export default migration;
