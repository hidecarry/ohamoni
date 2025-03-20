-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Customers" (
    "CustomerId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "CompanyName" TEXT NOT NULL,
    "ContactName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
