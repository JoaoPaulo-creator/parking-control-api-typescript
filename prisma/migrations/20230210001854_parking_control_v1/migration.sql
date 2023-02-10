-- CreateTable
CREATE TABLE "ParkingSpot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "licensePlate" TEXT NOT NULL,
    "brandCar" TEXT NOT NULL,
    "modelCar" TEXT NOT NULL,
    "colorCar" TEXT NOT NULL,
    "registrationDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "responsibleName" TEXT NOT NULL,
    "apartment" TEXT NOT NULL,
    "block" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ParkingNumber" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number" INTEGER NOT NULL,
    "isParkingSpotAvailable" BOOLEAN NOT NULL DEFAULT true,
    "parkingSpotId" TEXT,
    CONSTRAINT "ParkingNumber_parkingSpotId_fkey" FOREIGN KEY ("parkingSpotId") REFERENCES "ParkingSpot" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ParkingSpot_licensePlate_key" ON "ParkingSpot"("licensePlate");

-- CreateIndex
CREATE UNIQUE INDEX "ParkingNumber_number_key" ON "ParkingNumber"("number");
