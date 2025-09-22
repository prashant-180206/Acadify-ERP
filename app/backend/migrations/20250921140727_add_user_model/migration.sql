/*
  Warnings:

  - You are about to alter the column `submissionDate` on the `assignment_submission` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `assignment_submission` MODIFY `submissionDate` DATETIME NULL;
