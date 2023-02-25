function populate(spotNumber: number, licensePlate: number) {
  const payload = {
    apartment: "123",
    block: "2A",
    brandCar: "Mercedes Bens",
    colorCar: "white",
    licensePlate: `abc${licensePlate}`,
    modelCar: "Classe A Sedan",
    parkingSpot: {
      number: spotNumber,
      isParkingSpotAvailable: true,
    },
    responsibleName: "Joao",
  };

  return payload;
}

async function run() {
  console.log("Starting populate");

  let x = 0;
  let spotNumber = 0;
  let licensePlateNumber = 0;
  const dataAmount = 1000;

  while (x < dataAmount) {
    x++;
    spotNumber++;
    licensePlateNumber++;
    await fetch("http://localhost:4567/create-parking-spot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(populate(spotNumber, licensePlateNumber)),
    });

    if (x === dataAmount) {
      console.log("Populate was finished");
      break;
    }
  }
}

run();
