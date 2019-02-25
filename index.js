let store = { drivers: [], passengers: [], trips: [] };

let tripId = 0;
class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
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
let dId= 0;

class Driver {
  constructor(name) {
    this.id = ++dId;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    )
  }

  passengers() {
   return this.trips().map(trip => {
     return trip.passenger();
   }) 
  }
}

let pId = 0; 

class Passenger {
  constructor(name) {
    this.id = ++pId;
    this.name = name;

    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id;
      }.bind(this)
    )
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver();
  });
}
}