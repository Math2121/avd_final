-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "epi" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "validate" TEXT NOT NULL,
    "numero" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "EPI_delivery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "employee_id" TEXT NOT NULL,
    "epi_id" TEXT NOT NULL,
    "delivery_date" DATETIME NOT NULL,
    "amount_delivered" INTEGER NOT NULL,
    CONSTRAINT "EPI_delivery_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EPI_delivery_epi_id_fkey" FOREIGN KEY ("epi_id") REFERENCES "epi" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
