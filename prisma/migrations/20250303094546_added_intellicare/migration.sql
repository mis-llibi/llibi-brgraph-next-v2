-- CreateTable
CREATE TABLE `IntellicareMasterlist` (
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
CREATE TABLE `Intellicare` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
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

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `IntellicareMasterlist` ADD CONSTRAINT `IntellicareMasterlist_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Intellicare` ADD CONSTRAINT `Intellicare_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
