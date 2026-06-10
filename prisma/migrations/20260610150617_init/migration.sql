-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `admin` BOOLEAN NOT NULL DEFAULT false,
    `canUpload` BOOLEAN NOT NULL DEFAULT false,
    `canCreate` BOOLEAN NOT NULL DEFAULT false,
    `canViewDeck` BOOLEAN NOT NULL DEFAULT false,
    `canUploadDeck` BOOLEAN NOT NULL DEFAULT false,
    `canAdd` BOOLEAN NOT NULL DEFAULT false,
    `canRemove` BOOLEAN NOT NULL DEFAULT false,
    `canEdit` BOOLEAN NOT NULL DEFAULT false,
    `superAdmin` BOOLEAN NOT NULL DEFAULT false,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `mustChangePassword` BOOLEAN NOT NULL DEFAULT false,
    `lastLogin` DATETIME(3) NULL,
    `createdBy` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `insurers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `insurers_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datasets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `insurerId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `datasets_clientId_idx`(`clientId`),
    INDEX `datasets_insurerId_idx`(`insurerId`),
    INDEX `datasets_title_idx`(`title`),
    UNIQUE INDEX `datasets_clientId_title_key`(`clientId`, `title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `client_name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `insurer_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `uploads` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `insurerId` INTEGER NOT NULL,
    `datasetId` INTEGER NULL,
    `year` VARCHAR(191) NOT NULL,
    `months` VARCHAR(191) NULL,
    `type` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `uploads_datasetId_idx`(`datasetId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `decks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `clientId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `masterlistEntries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `insurerId` INTEGER NOT NULL,
    `datasetId` INTEGER NOT NULL,
    `maskedId` VARCHAR(191) NULL,
    `companyName` VARCHAR(500) NOT NULL,
    `relationship` VARCHAR(191) NOT NULL,
    `memberType` VARCHAR(191) NOT NULL,
    `planType` VARCHAR(191) NULL,
    `mbl` DOUBLE NULL,
    `ageGroup` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `masterlistEntries_clientId_idx`(`clientId`),
    INDEX `masterlistEntries_insurerId_idx`(`insurerId`),
    INDEX `masterlistEntries_datasetId_idx`(`datasetId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `utilizationEntries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `insurerId` INTEGER NOT NULL,
    `datasetId` INTEGER NOT NULL,
    `maskedId` VARCHAR(191) NULL,
    `companyName` VARCHAR(500) NOT NULL,
    `relationship` VARCHAR(191) NOT NULL,
    `memberType` VARCHAR(191) NOT NULL,
    `planType` VARCHAR(191) NULL,
    `mbl` DOUBLE NULL,
    `ageGroup` VARCHAR(191) NULL,
    `diagnosis` VARCHAR(1000) NOT NULL,
    `providerName` VARCHAR(500) NOT NULL,
    `claimCoverageType` VARCHAR(191) NOT NULL,
    `admissionDate` DATETIME(3) NULL,
    `dischargeDate` DATETIME(3) NULL,
    `dateProcessed` DATETIME(3) NULL,
    `approvedClaimAmount` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `utilizationEntries_clientId_idx`(`clientId`),
    INDEX `utilizationEntries_insurerId_idx`(`insurerId`),
    INDEX `utilizationEntries_datasetId_idx`(`datasetId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customIllnesses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `py` VARCHAR(191) NULL,
    `member_type` VARCHAR(191) NULL,
    `icd_10_code` VARCHAR(191) NULL,
    `diagnosis` VARCHAR(1000) NULL,
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
ALTER TABLE `user` ADD CONSTRAINT `user_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `datasets` ADD CONSTRAINT `datasets_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `datasets` ADD CONSTRAINT `datasets_insurerId_fkey` FOREIGN KEY (`insurerId`) REFERENCES `insurers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `clients` ADD CONSTRAINT `clients_insurer_id_fkey` FOREIGN KEY (`insurer_id`) REFERENCES `insurers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `uploads` ADD CONSTRAINT `uploads_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `uploads` ADD CONSTRAINT `uploads_insurerId_fkey` FOREIGN KEY (`insurerId`) REFERENCES `insurers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `uploads` ADD CONSTRAINT `uploads_datasetId_fkey` FOREIGN KEY (`datasetId`) REFERENCES `datasets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `decks` ADD CONSTRAINT `decks_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `masterlistEntries` ADD CONSTRAINT `masterlistEntries_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `masterlistEntries` ADD CONSTRAINT `masterlistEntries_insurerId_fkey` FOREIGN KEY (`insurerId`) REFERENCES `insurers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `masterlistEntries` ADD CONSTRAINT `masterlistEntries_datasetId_fkey` FOREIGN KEY (`datasetId`) REFERENCES `datasets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `utilizationEntries` ADD CONSTRAINT `utilizationEntries_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `utilizationEntries` ADD CONSTRAINT `utilizationEntries_insurerId_fkey` FOREIGN KEY (`insurerId`) REFERENCES `insurers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `utilizationEntries` ADD CONSTRAINT `utilizationEntries_datasetId_fkey` FOREIGN KEY (`datasetId`) REFERENCES `datasets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customIllnesses` ADD CONSTRAINT `customIllnesses_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

