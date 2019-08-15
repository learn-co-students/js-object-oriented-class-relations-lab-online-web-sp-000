let store = { drivers: [], passengers: [], trips:[]};
//tracking the objects across all classes (@@all)
let driverId = 0;
let passengerId = 0;
let tripId = 0;


class Driver {
  constructor(name){
    this.name = name
    this.id = ++driverId;
    store.drivers.push(this)
  }
  //reader methods for the other classes that Driver has relations with (iterate thru a doctor to see the patients it has)
  trips() {
    return store.trips.filter(trip => {
      return trip.driverId == this.id;
    });
  }
  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
} //end

// new Driver(driverId, name)


class Passenger {
  constructor(name){
    this.name = name
    this.id = ++passengerId;
    store.passengers.push(this)
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
}//edn of class

//join model between passenger and driver
//constructor like initialize in ruby
class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    this.driverId = driver.id
    this.passengerId = passenger.id
    //self.driver_id = self.id
    store.trips.push(this)
  } //end constructor
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
