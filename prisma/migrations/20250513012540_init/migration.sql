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
    `year` VARCHAR(191) NOT NULL,
    `months` VARCHAR(191) NULL,
    `type` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `decks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `clientId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `intellicareMasterlist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `PY` VARCHAR(191) NULL,
    `ACCOUNT_NO` VARCHAR(191) NULL,
    `STATUS` CHAR(1) NULL,
    `MEMBER_TYPE` CHAR(1) NULL,
    `RNB` VARCHAR(191) NULL,
    `PREEXIST` DOUBLE NULL,
    `LIMIT` DOUBLE NULL,
    `BIRTHDATE` DATETIME(3) NULL,
    `AGE` INTEGER NULL,
    `RELATION` VARCHAR(191) NULL,
    `EE_ID` VARCHAR(191) NULL,
    `CARD_NO` VARCHAR(191) NULL,
    `COMPANY` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `maxicareMasterlist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `PY` VARCHAR(191) NULL,
    `ACCOUNT_NO` VARCHAR(191) NULL,
    `STATUS` CHAR(1) NULL,
    `MEMBER_TYPE` CHAR(1) NULL,
    `LIMIT` DOUBLE NULL,
    `RELATION` VARCHAR(191) NULL,
    `EE_ID` VARCHAR(191) NULL,
    `CARD_NO` VARCHAR(191) NULL,
    `COMPANY` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `intellicare` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `PY` VARCHAR(191) NOT NULL,
    `Company` VARCHAR(191) NULL,
    `Member_Account` VARCHAR(191) NULL,
    `Member_Type` VARCHAR(191) NULL,
    `ICD_10_Code` VARCHAR(191) NULL,
    `Diagnosis` VARCHAR(191) NULL,
    `Claim_Type` VARCHAR(191) NULL,
    `Admission_Date` DATETIME(3) NULL,
    `Provider_Name` VARCHAR(191) NULL,
    `Provider_Type` VARCHAR(191) NULL,
    `Approved_Claim_Amount` DOUBLE NULL,
    `Class_Plan_Level` VARCHAR(191) NULL,
    `Maximum_Benefit_Limit` DOUBLE NULL,
    `Date_of_Birth` DATETIME(3) NULL,
    `Relationship` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `maxicare` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `PY` VARCHAR(191) NOT NULL,
    `Company` VARCHAR(191) NULL,
    `Member_Account` VARCHAR(191) NULL,
    `Member_Type` VARCHAR(191) NULL,
    `ICD_10_Code` VARCHAR(191) NULL,
    `Diagnosis` VARCHAR(191) NULL,
    `Claim_Type` VARCHAR(191) NULL,
    `Admission_Date` DATETIME(3) NULL,
    `Provider_Name` VARCHAR(191) NULL,
    `Provider_Type` VARCHAR(191) NULL,
    `Approved_Claim_Amount` DOUBLE NULL,
    `Relationship` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customIllnesses` (
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
ALTER TABLE `clients` ADD CONSTRAINT `clients_insurer_id_fkey` FOREIGN KEY (`insurer_id`) REFERENCES `insurers`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `uploads` ADD CONSTRAINT `uploads_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `uploads` ADD CONSTRAINT `uploads_insurerId_fkey` FOREIGN KEY (`insurerId`) REFERENCES `insurers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `decks` ADD CONSTRAINT `decks_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `intellicareMasterlist` ADD CONSTRAINT `intellicareMasterlist_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maxicareMasterlist` ADD CONSTRAINT `maxicareMasterlist_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `intellicare` ADD CONSTRAINT `intellicare_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `maxicare` ADD CONSTRAINT `maxicare_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customIllnesses` ADD CONSTRAINT `customIllnesses_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
