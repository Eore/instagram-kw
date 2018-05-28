CREATE TABLE `user` (
	`iduser` INT NOT NULL AUTO_INCREMENT,
	`username` varchar(30) NOT NULL,
	`email` varchar(30) NOT NULL,
	`password` varchar(30) NOT NULL,
	PRIMARY KEY (`iduser`)
);

CREATE TABLE `timeline` (
	`idtimeline` INT NOT NULL AUTO_INCREMENT,
	`iduser` INT NOT NULL,
	`image` varchar(30) NOT NULL,
	`caption` varchar(30) NOT NULL,
	`uploaddate` TIMESTAMP NOT NULL,
	PRIMARY KEY (`idtimeline`)
);

CREATE TABLE `like` (
	`idlike` INT NOT NULL AUTO_INCREMENT,
	`iduser` INT NOT NULL,
	`idtimeline` INT NOT NULL,
	PRIMARY KEY (`idlike`)
);

CREATE TABLE `follow` (
	`idfollow` INT NOT NULL AUTO_INCREMENT,
	`iduser` INT NOT NULL,
	`idfollowers` INT NOT NULL,
	PRIMARY KEY (`idfollow`)
);

