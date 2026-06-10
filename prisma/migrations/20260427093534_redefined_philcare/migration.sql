/*
  Warnings:

  - You are about to drop the column `ICD_10_Code` on the `philcare` table. All the data in the column will be lost.
  - You are about to drop the column `IP_OP` on the `philcare` table. All the data in the column will be lost.
  - You are about to drop the column `Provider_Type` on the `philcare` table. All the data in the column will be lost.
  - You are about to drop the column `ACCIDENTAL_RIDER` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `ACCIDENTAL_RIDER_COVERAGE_AMT` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `ACCOUNT_TYPE` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `AGE` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `AGREEMENT_NO` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `CERTIFICATE_NO` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `CLASS_CODE` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `CLASS_DEFINITION` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `DATE_OF_BIRTH` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `DENTAL_CODE` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `EMPLOYEE_NO` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `FIRST_NAME` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `GENDER` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `LAST_NAME` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `LIFE_RIDER` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `LIFE_RIDER_COVERAGE_AMT` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `MARITAL_STATUS` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `MEMBER_COVERAGE` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `MEMBER_EFF_DATE` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `MEMBER_FEE_PLUS_RIDER` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `MEMBER_ORIG_EFF_DATE` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `MEMBER_STATUS` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `MI` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `PAYOR` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `POLICY_NO` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `PRE_EXISTING_CODE` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `REMARKS` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `ROOM_BOARD_MAX_AMT` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `ROOM_TYPE` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `SUB_OFFICE_CODE` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `TAP_COVERAGE_AMT` on the `philcareMasterlist` table. All the data in the column will be lost.
  - You are about to drop the column `TRAVEL_ASSISTANCE_PROGRAM` on the `philcareMasterlist` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `intellicare` ADD COLUMN `datasetId` INTEGER NULL;

-- AlterTable
ALTER TABLE `intellicareMasterlist` ADD COLUMN `datasetId` INTEGER NULL;

-- AlterTable
ALTER TABLE `maxicare` ADD COLUMN `datasetId` INTEGER NULL;

-- AlterTable
ALTER TABLE `maxicareMasterlist` ADD COLUMN `datasetId` INTEGER NULL;

-- AlterTable
ALTER TABLE `philcare` DROP COLUMN `ICD_10_Code`,
    DROP COLUMN `IP_OP`,
    DROP COLUMN `Provider_Type`,
    ADD COLUMN `datasetId` INTEGER NULL;

-- AlterTable
ALTER TABLE `philcareMasterlist` DROP COLUMN `ACCIDENTAL_RIDER`,
    DROP COLUMN `ACCIDENTAL_RIDER_COVERAGE_AMT`,
    DROP COLUMN `ACCOUNT_TYPE`,
    DROP COLUMN `AGE`,
    DROP COLUMN `AGREEMENT_NO`,
    DROP COLUMN `CERTIFICATE_NO`,
    DROP COLUMN `CLASS_CODE`,
    DROP COLUMN `CLASS_DEFINITION`,
    DROP COLUMN `DATE_OF_BIRTH`,
    DROP COLUMN `DENTAL_CODE`,
    DROP COLUMN `EMPLOYEE_NO`,
    DROP COLUMN `FIRST_NAME`,
    DROP COLUMN `GENDER`,
    DROP COLUMN `LAST_NAME`,
    DROP COLUMN `LIFE_RIDER`,
    DROP COLUMN `LIFE_RIDER_COVERAGE_AMT`,
    DROP COLUMN `MARITAL_STATUS`,
    DROP COLUMN `MEMBER_COVERAGE`,
    DROP COLUMN `MEMBER_EFF_DATE`,
    DROP COLUMN `MEMBER_FEE_PLUS_RIDER`,
    DROP COLUMN `MEMBER_ORIG_EFF_DATE`,
    DROP COLUMN `MEMBER_STATUS`,
    DROP COLUMN `MI`,
    DROP COLUMN `PAYOR`,
    DROP COLUMN `POLICY_NO`,
    DROP COLUMN `PRE_EXISTING_CODE`,
    DROP COLUMN `REMARKS`,
    DROP COLUMN `ROOM_BOARD_MAX_AMT`,
    DROP COLUMN `ROOM_TYPE`,
    DROP COLUMN `SUB_OFFICE_CODE`,
    DROP COLUMN `TAP_COVERAGE_AMT`,
    DROP COLUMN `TRAVEL_ASSISTANCE_PROGRAM`,
    ADD COLUMN `datasetId` INTEGER NULL;

-- AlterTable
ALTER TABLE `uploads` ADD COLUMN `datasetId` INTEGER NULL;

-- CreateTable
CREATE TABLE `datasets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `insurerId` INTEGER NOT NULL,
    `title` VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `datasets_clientId_idx`(`clientId`),
    INDEX `datasets_insurerId_idx`(`insurerId`),
    INDEX `datasets_title_idx`(`title`),
    UNIQUE INDEX `datasets_clientId_title_key`(`clientId`, `title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `intellicare_datasetId_idx` ON `intellicare`(`datasetId`);

-- CreateIndex
CREATE INDEX `intellicareMasterlist_datasetId_idx` ON `intellicareMasterlist`(`datasetId`);

-- CreateIndex
CREATE INDEX `maxicare_datasetId_idx` ON `maxicare`(`datasetId`);

-- CreateIndex
CREATE INDEX `maxicareMasterlist_datasetId_idx` ON `maxicareMasterlist`(`datasetId`);

-- CreateIndex
CREATE INDEX `philcare_datasetId_idx` ON `philcare`(`datasetId`);

-- CreateIndex
CREATE INDEX `philcareMasterlist_datasetId_idx` ON `philcareMasterlist`(`datasetId`);

-- CreateIndex
CREATE INDEX `uploads_datasetId_idx` ON `uploads`(`datasetId`);

-- AddForeignKey
ALTER TABLE `datasets` ADD CONSTRAINT `datasets_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `datasets` ADD CONSTRAINT `datasets_insurerId_fkey` FOREIGN KEY (`insurerId`) REFERENCES `insurers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `uploads` ADD CONSTRAINT `uploads_datasetId_fkey` FOREIGN KEY (`datasetId`) REFERENCES `datasets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `intellicareMasterlist` ADD CONSTRAINT `intellicareMasterlist_datasetId_fkey` FOREIGN KEY (`datasetId`) REFERENCES `datasets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maxicareMasterlist` ADD CONSTRAINT `maxicareMasterlist_datasetId_fkey` FOREIGN KEY (`datasetId`) REFERENCES `datasets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `philcareMasterlist` ADD CONSTRAINT `philcareMasterlist_datasetId_fkey` FOREIGN KEY (`datasetId`) REFERENCES `datasets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `intellicare` ADD CONSTRAINT `intellicare_datasetId_fkey` FOREIGN KEY (`datasetId`) REFERENCES `datasets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maxicare` ADD CONSTRAINT `maxicare_datasetId_fkey` FOREIGN KEY (`datasetId`) REFERENCES `datasets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `philcare` ADD CONSTRAINT `philcare_datasetId_fkey` FOREIGN KEY (`datasetId`) REFERENCES `datasets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
