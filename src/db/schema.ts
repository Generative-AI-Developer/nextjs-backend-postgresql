import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const db = drizzle(sql);

export const Todo = pgTable("todo_tbl", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  isCompleted: boolean("is_completed").default(false),
});
