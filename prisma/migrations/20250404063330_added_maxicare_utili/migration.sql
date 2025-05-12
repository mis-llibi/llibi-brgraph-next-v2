-- CreateTable
CREATE TABLE `Maxicare` (
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

-- AddForeignKey
ALTER TABLE `Maxicare` ADD CONSTRAINT `Maxicare_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
