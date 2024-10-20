CREATE TABLE IF NOT EXISTS "todo_tbl" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"is_completed" boolean DEFAULT false
);
