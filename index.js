let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0


class Driver {
  constructor (name){
    this.id = ++driverId
    this.name = name

    store.drivers.push(this)
  }

//A driver has many trips
trips() {
  return store.trips.filter(
      function(trip) {
          return trip.driverId === this.id;
      }.bind(this)
  );
}

// A driver has many passengers through trips
passengers() {
  return this.trips().map(trip => {
    return trip.passenger(); //trip belong to a passenger
  });
}
}


class Passenger {
  constructor (name){
    this.id = ++passengerId
    this.name = name

    store.passengers.push(this)
  }
  //A passenger has many trips

  trips() {
    return store.trips.filter(
        function(trip) {
            return trip.passengerId === this.id;
        }.bind(this)
    );
  }
  //A passenger has many drivers through trips

  drivers() {
    return this.trips().map(trip => {
      return trip.driver();  //trip belongs to a driver
    });
  }
}





class Trip {
  constructor (driver,passenger){
    this.id = ++tripId
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this)
}




driver() {
  return store.drivers.find(
      function(driver) {
          return driver.id === this.driverId;
      }.bind(this)
  );
}

passenger() {
    return store.passengers.find(
        function(passenger) {
            return passenger.id === this.passengerId;
        }.bind(this)
    );
}
}
