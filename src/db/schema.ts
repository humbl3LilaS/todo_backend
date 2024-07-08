import {int, mysqlTable, varchar} from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
    id: int("id").unique().primaryKey(),
    password: varchar("password", {length: 256}).notNull(),
    email: varchar("email", {length: 256}).unique().notNull(),
});