let driverId = 0;
let tripId = 0;
let passengerId = 0;

let store = {drivers: [], trips: [], passengers: []};

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(function (trip) {
      return trip.driverId === this.id;
    }.bind(this));
  }

  passengers() {
    let t = this.trips();
    return store.passengers.filter(function (passenger) {
      return t.find( function (element) {
        return element.passengerId === passenger.id;
      }) !== undefined;
    }.bind(this));
  }
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(function (trip) {
      return trip.passengerId === this.id;
    }.bind(this));
  }

  drivers() {
    let t = this.trips();
    return store.drivers.filter(function (driver) {
      return t.find(function (element) {
        return element.driverId === driver.id;
      }) !== undefined;
    }.bind(this));
  }
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(function (driver) {
      return driver.id === this.driverId;
    }.bind(this));
  }

  passenger(){
    return store.passengers.find(function (passenger) {
      return passenger.id === this.passengerId;
    }.bind(this));
  }
}
