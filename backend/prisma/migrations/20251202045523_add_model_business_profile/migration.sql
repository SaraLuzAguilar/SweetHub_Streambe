-- CreateTable
CREATE TABLE `emprendimientos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `slogan` TEXT NULL,
    `category` VARCHAR(100) NULL,
    `location` VARCHAR(255) NULL,
    `instagram` VARCHAR(255) NULL,
    `whatsapp` VARCHAR(50) NULL,
    `phone` VARCHAR(50) NULL,
    `coverImageUrl` VARCHAR(255) NULL,
    `profileImageUrl` VARCHAR(255) NULL,
    `design_color` VARCHAR(50) NULL DEFAULT '#FFFFFF',
    `design_font` VARCHAR(100) NULL DEFAULT 'sans-serif',
    `design_layout` VARCHAR(50) NULL DEFAULT 'simple',

    UNIQUE INDEX `emprendimientos_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `emprendimientos` ADD CONSTRAINT `emprendimientos_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
