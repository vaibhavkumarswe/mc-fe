const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Blue",
  price: "₹25,00,000",
};

function selectCar(car) {
  const promise = new Promise((resolve, reject) => {
    if (validateCarSelection()) {
      const carDescription = {
        ...car,
        name: "bittu",
      };
      resolve(carDescription);
    } else {
      const err = new Error("Car Selected does not exist");
      err.success = false;
      reject(err);
    }
  });

  return promise;
}

function buyCar(car) {
  const promise = new Promise((resolve, reject) => {
    if (selectsYes()) {
      const customer = {
        ...car,
        name: "John Doe",
        email: "thomas.r.marshall@example.com",
        success: true,
      };
      resolve(customer);
    } else {
      const rejection = {
        reason: "Customer Declined",
        success: false,
      };
      reject(rejection);
    }
  });

  return promise;
}

function validateCarSelection() {
  return true;
}

function selectsYes() {
  return true;
}

selectCar(car)
  .then((car) => {
    console.log("CAR->", car);
    return car;
  })
  .then((car) => {
    return buyCar(car);
  })
  .then((customer) => {
    console.log("Decision->", customer);
    return customer;
  })
  .then((customerDecision) => {
    const dealerShipDecision = {
      ...customerDecision,
      message: "congractulations on your purchase",
    };
    console.log("Decision2->", dealerShipDecision);
    return dealerShipDecision;
  })
  .then((dealerShipDecision) => {
    console.log("dealerShipDecision", dealerShipDecision);
  })
  .catch((err) => {
    console.log(err);
  });
