// driver has many trips
// passenger has many trips

let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(
      function(trip){
          return this.id == trip.driverId;
      }.bind(this) //binds the context to driver. aka the context of this when the callback is defined
    );

  }
  //returns all of the trips that a driver has taken

  passengers(){
    return this.trips().map(trip => {
      return trip.passenger();
    });  //using trips() as a helper function
  }
  //returns all of the passengers that a driver has taken on a trip
}

class Passenger {
  constructor(name){
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this)
  }

  trips(){
    return store.trips.filter(
      function(trip){
          return this.id == trip.passengerId;
      }.bind(this) //binds the context to driver. aka the context of this when the callback is defined
    );
}
  //returns all of the trips that a passenger has taken


  drivers() {
      return this.trips().map(trip => {
        return trip.driver();
      });
    }

//returns all of the drivers that has taken a passenger on a trip

}

class Trip {
  constructor(driver, passenger){
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;
    store.trips.push(this)
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
