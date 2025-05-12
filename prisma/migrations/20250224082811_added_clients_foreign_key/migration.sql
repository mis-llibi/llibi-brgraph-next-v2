/*
  Warnings:

  - Added the required column `clientId` to the `Decks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `decks` ADD COLUMN `clientId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Decks` ADD CONSTRAINT `Decks_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
