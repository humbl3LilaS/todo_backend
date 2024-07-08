import "dotenv/config";
import {migrate} from "drizzle-orm/mysql2/migrator";
import {db, connection} from "./setup";

await migrate(db, {migrationsFolder: "./migrations"});

await connection.end();