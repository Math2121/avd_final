/*
  Warnings:

  - Added the required column `function` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_employees" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "function" TEXT NOT NULL
);
INSERT INTO "new_employees" ("cpf", "id", "name") SELECT "cpf", "id", "name" FROM "employees";
DROP TABLE "employees";
ALTER TABLE "new_employees" RENAME TO "employees";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
