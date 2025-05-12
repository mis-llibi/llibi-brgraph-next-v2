-- DropForeignKey
ALTER TABLE `clients` DROP FOREIGN KEY `Clients_insurer_id_fkey`;

-- DropIndex
DROP INDEX `Clients_insurer_id_fkey` ON `clients`;

-- AlterTable
ALTER TABLE `clients` MODIFY `insurer_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Clients` ADD CONSTRAINT `Clients_insurer_id_fkey` FOREIGN KEY (`insurer_id`) REFERENCES `Insurers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
