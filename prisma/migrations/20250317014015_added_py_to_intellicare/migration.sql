/*
  Warnings:

  - Added the required column `PY` to the `Intellicare` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `intellicare` ADD COLUMN `PY` VARCHAR(191) NOT NULL;
