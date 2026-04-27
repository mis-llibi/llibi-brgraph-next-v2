-- AlterTable
ALTER TABLE `customIllnesses` MODIFY `diagnosis` VARCHAR(1000) NULL;

-- AlterTable
ALTER TABLE `intellicare` MODIFY `Company` VARCHAR(500) NULL,
    MODIFY `Diagnosis` VARCHAR(1000) NULL;

-- AlterTable
ALTER TABLE `intellicareMasterlist` MODIFY `COMPANY` VARCHAR(500) NULL;

-- AlterTable
ALTER TABLE `maxicare` MODIFY `Company` VARCHAR(500) NULL,
    MODIFY `Diagnosis` VARCHAR(1000) NULL;

-- AlterTable
ALTER TABLE `maxicareMasterlist` MODIFY `COMPANY` VARCHAR(500) NULL;

-- AlterTable
ALTER TABLE `philcare` MODIFY `Company` VARCHAR(500) NULL,
    MODIFY `Diagnosis` VARCHAR(1000) NULL;

-- AlterTable
ALTER TABLE `philcareMasterlist` MODIFY `SUB_OFFICE_NAME` VARCHAR(500) NULL;
