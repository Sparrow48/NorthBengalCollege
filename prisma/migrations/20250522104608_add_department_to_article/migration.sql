/*
  Warnings:

  - The `department` column on the `Notice` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "department" TEXT[];

-- AlterTable
ALTER TABLE "Notice" DROP COLUMN "department",
ADD COLUMN     "department" TEXT[];
