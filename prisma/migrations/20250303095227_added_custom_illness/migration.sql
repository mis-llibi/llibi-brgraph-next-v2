/*
  Warnings:

  - Added the required column `updatedAt` to the `Intellicare` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `intellicare` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `CustomIllnesses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `py` VARCHAR(191) NULL,
    `member_type` VARCHAR(191) NULL,
    `icd_10_code` VARCHAR(191) NULL,
    `diagnosis` VARCHAR(191) NULL,
    `claim_amount` INTEGER NULL,
    `percentage_to_total_amount` DECIMAL(8, 2) NULL,
    `claim_count` INTEGER NULL,
    `percentage_to_total_count` DECIMAL(8, 2) NULL,
    `average_cost_per_claim` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CustomIllnesses` ADD CONSTRAINT `CustomIllnesses_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
