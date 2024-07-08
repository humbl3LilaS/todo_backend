CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT,
	`password` varchar(256) NOT NULL,
	`email` varchar(256) NOT NULL,
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
DROP TABLE `table`;