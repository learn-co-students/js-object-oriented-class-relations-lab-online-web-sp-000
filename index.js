const store = {drivers: [], passengers: [], trips: []};
let userId = 0;
let passengerId = 0;
let tripId = 0;


class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++userId;
    store.drivers.push(this);
  }

  trips(){
    return store.trips.filter(
      function(element){
        return element.driverId === this.id;
      }.bind(this)
    );
  }

  passengers(){
    return this.trips().map(
      function(element){
        return element.passenger();
      }.bind(this)
    );
  }
}



class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter(
      function(element){
        return element.passengerId === this.id;
      }.bind(this)
    );
  }

  drivers(){
    return this.trips().map(
      function(element) {
        return element.driver();
      }.bind(this)
    );
  }
}




class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id
    this.passengerId = passenger.id;
    store.trips.push(this);
  }
    passenger() {
      return store.passengers.find(
        function(element){
          return element.id === this.passengerId;
        }.bind(this)
      );
    }

    driver() {
      return store.drivers.find(
        function(element){
          return element.id === this.driverId;
        }.bind(this)
      );
    }
}
