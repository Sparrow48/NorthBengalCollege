/*
  Warnings:

  - Added the required column `isFeatured` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "isFeatured" TEXT NOT NULL;
