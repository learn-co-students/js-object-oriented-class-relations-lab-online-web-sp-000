let store = { drivers: [], passengers: [], trips: []};

let driverId = 0;

class Driver {
  constructor( name ) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }
  //A driver has many trips
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId === this.id;
    });
  }
  // A driver has many passengers through trips
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger(); //trip belong to a passenger
    });
  }
};

let passengerId = 0;

class Passenger {
  constructor( name ) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }
  //A passenger has many trips
  trips() {
    return store.trips.filter(trip => {
      return trip.passengerId === this.id;
    });
  }
  //A passenger has many drivers through trips
  drivers() {
    return this.trips().map(trip => {
      return trip.driver(); //trip belongs to a driver
    });
  };
};

let tripId = 0;

class Trip {
  constructor( driver, passenger ) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = tripId++;

    store.trips.push(this);
  }
  //Driver that belongs to trip
  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    });
  };
  // Passenger that belongs to Trip
  passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    });
  };

}
