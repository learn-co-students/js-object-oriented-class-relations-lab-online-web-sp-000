  let driverId = 0;
  let passengerId = 0;
  let tripId = 0;
  let store = { drivers: [], passengers: [], trips: [] };

class Driver {

    constructor(name) {
        this.id = ++driverId;
        this.name = name;
        store.drivers.push(this);
    }

    trips() {
      return store.trips.filter( dri => dri.tripId === this.driverId);
    }

    passengers(){
      return this.trips().map(trip => trip.passenger() );
    }

}

class Passenger {

  constructor(name) {
      this.id = ++passengerId;
      this.name = name;
      store.passengers.push(this);
  }
  trips() {
    return store.trips.filter( dri => dri.tripId === this.passengerId);
 }

  drivers(){
    return this.trips().map(trip => trip.driver() );
  }

}


class Trip {
  constructor(driverId, passengerId) {
      this.id = ++tripId;
    if (driverId) {
      this.driverId = driverId.id;
    }
    if (passengerId) {
      this.passengerId = passengerId.id;
    }
      store.trips.push(this);
  }

  driver() {
    return store.drivers.find(driver => driver.id === this.driverId);
  }

  passenger() {
    return store.passengers.find(passenger => passenger.id === this.passengerId);

    }

}
