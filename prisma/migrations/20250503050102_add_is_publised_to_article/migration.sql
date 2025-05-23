/*
  Warnings:

  - The `isFeatured` column on the `Article` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "isFeatured",
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Notice" ADD COLUMN     "isPublished" BOOLEAN NOT NULL DEFAULT false;
