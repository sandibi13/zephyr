ALTER TABLE "zephyr_users" ADD COLUMN "discord_id" varchar(255);--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "user_discord_idx" ON "zephyr_users" ("discord_id");--> statement-breakpoint
ALTER TABLE "zephyr_users" ADD CONSTRAINT "zephyr_users_discord_id_unique" UNIQUE("discord_id");