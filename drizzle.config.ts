import {defineConfig} from "drizzle-kit";

import dotenv from "dotenv";

dotenv.config();
export default defineConfig({
    //@ts-expect-error
    schema: "./src/db/schema.ts",
    //@ts-expect-error
    out: "./src/db/migrations",
    dialect: "mysql",
    dbCredentials: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});