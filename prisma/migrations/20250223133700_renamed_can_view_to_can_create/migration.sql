/*
  Warnings:

  - You are about to drop the column `canView` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `canView`,
    ADD COLUMN `canCreate` BOOLEAN NOT NULL DEFAULT false;
