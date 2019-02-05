

let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    // Placing the ++ on the left instead of on the right doesn't prevent it from working (at least not in this case)
    store.drivers.push(this);
  }
  trips() {
    return store.trips.filter(function(trip) {
      //The LONGHAND filter must be immediately followed by ".bind(this)"
      return trip.driverId == this.id;
    }.bind(this)
    //The LONGHAND filter must be immediately followed by ".bind(this)"
    );
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = passengerId++;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId == this.id;
    });
  }
  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
    });
  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = tripId++;
    store.trips.push(this);
  }
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  }
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}