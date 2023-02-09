/*
  Warnings:

  - Added the required column `number` to the `ParkingNumber` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ParkingNumber" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "isParkingSpotAvailable" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_ParkingNumber" ("id", "isParkingSpotAvailable") SELECT "id", "isParkingSpotAvailable" FROM "ParkingNumber";
DROP TABLE "ParkingNumber";
ALTER TABLE "new_ParkingNumber" RENAME TO "ParkingNumber";
CREATE UNIQUE INDEX "ParkingNumber_number_key" ON "ParkingNumber"("number");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
