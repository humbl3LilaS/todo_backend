ALTER TABLE `users` MODIFY COLUMN `id` int NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD PRIMARY KEY(`id`);--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_id_unique` UNIQUE(`id`);