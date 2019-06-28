const store = {
  drivers: [],
  passengers: [],
  trips: [],
};

let driverId = 0;
class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  };

  trips(){
    return store.trips.filter(
      function(trip){
        return trip.driverId === this.id;
      }.bind(this)
    );
  };

  passengers() {
    let passengers = [];
    this.trips().forEach(function(trip){
      passengers.push(trip.passenger());
    });
    return passengers;
  };
};

let passengerId = 0;
class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  };

  trips(){
    return store.trips.filter(
      function(trip){
        return trip.passengerId === this.id;
      }.bind(this)
    );
  };

  drivers() {
    let drivers = [];
    this.trips().forEach(function(trip){
      drivers.push(trip.driver());
    });
    return drivers;
  };
};

let tripId = 0;
class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;

    store.trips.push(this);
  };

  driver() {
    return store.drivers.find(
      function(d){
        return d.id === this.driverId
      }.bind(this)
    );
  };

  passenger() {
    return store.passengers.find(
      function(p){
        return p.id === this.passengerId
      }.bind(this)
    );
  };
}
