/*
  Warnings:

  - You are about to drop the column `function` on the `employees` table. All the data in the column will be lost.
  - Added the required column `role` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_employees" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "role" TEXT NOT NULL
);
INSERT INTO "new_employees" ("cpf", "id", "name") SELECT "cpf", "id", "name" FROM "employees";
DROP TABLE "employees";
ALTER TABLE "new_employees" RENAME TO "employees";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
