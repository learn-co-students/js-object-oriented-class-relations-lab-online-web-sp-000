
let store = {drivers: [], passengers: [], trips: []};
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name, price){
    this.id = ++driverId
    this.name = name
    this.price = price
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(
        function(trip) {
           debugger
            return trip.driverId === this.id;
        }.bind(this)
    );
  }

}


class Passenger{
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  trips(){

  }
  drivers(){

  }
}

class Trip{
  constructor(driver, passenger){
    this.id = ++tripId
    this.driverId = driver.id;
    store.trips.push(this)
  }

}
