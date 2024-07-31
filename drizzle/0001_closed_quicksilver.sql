ALTER TABLE "zephyr_users" ADD COLUMN "google_id" varchar(255);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_google_idx" ON "zephyr_users" ("google_id");--> statement-breakpoint
ALTER TABLE "zephyr_users" ADD CONSTRAINT "zephyr_users_google_id_unique" UNIQUE("google_id");