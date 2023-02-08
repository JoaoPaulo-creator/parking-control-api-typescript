-- CreateTable
CREATE TABLE "ParkingSpot" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "parkingSpotNumber" TEXT NOT NULL,
    "licensePlate" TEXT NOT NULL,
    "brandCar" TEXT NOT NULL,
    "modelCar" TEXT NOT NULL,
    "colorCar" TEXT NOT NULL,
    "registrationDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reponsibleName" TEXT NOT NULL,
    "apartment" TEXT NOT NULL,
    "block" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ParkingSpot_parkingSpotNumber_key" ON "ParkingSpot"("parkingSpotNumber");

-- CreateIndex
CREATE UNIQUE INDEX "ParkingSpot_licensePlate_key" ON "ParkingSpot"("licensePlate");
