/*
  Warnings:

  - Added the required column `key` to the `decks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `decks` ADD COLUMN `key` VARCHAR(191) NOT NULL;
