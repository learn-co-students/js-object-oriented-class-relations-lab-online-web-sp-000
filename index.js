const store = {drivers: [], passengers: [], trips: []}

let driverId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }

  trips = () => store.trips.filter(({driverId}) => driverId === this.id);

  passengers = () => this.trips().map(trip => trip.passenger())
}

let passengerId = 0;

class Passenger{
  constructor(name) {
    this.name =name;
    this.id = ++passengerId;

    store.passengers.push(this)
  }

  trips = () => store.trips.filter(({passengerId}) => passengerId === this.id);

  drivers = () => this.trips().map(trip => trip.driver());
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    store.trips.push(this);
  }

  driver() {
    return store.drivers.find(({id}) => id === this.driverId);
  }

  passenger() {
    return store.passengers.find(({id}) => id === this.passengerId);
  }
}
