/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Insurers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Insurers_name_key` ON `Insurers`(`name`);
