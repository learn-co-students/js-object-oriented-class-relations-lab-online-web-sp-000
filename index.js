let store = { drivers: [], passengers: [], trips: []};

let driverId = 0;


class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;
 
        // insert in the drivers to the store
        store.drivers.push(this);
    }

    //driver has trips
    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
    }

    //driver has passengers
    passengers() {
        return this.trips().map(function(trip) {
          return trip.passenger()
        });
      }
}

let passengerId = 0;

class Passenger {
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;
 
        // insert in the passengers to the store
        store.passengers.push(this);
    }

        //passenger has trips
        trips() {
            return store.trips.filter(
                function(trip) {
                    return trip.passengerId === this.id;
                }.bind(this)
            );
        }

        //passenger has drivers
        drivers() {
        return this.trips().map(function(trip) {
          return trip.driver()
        });
      }
}

let tripId = 0;

class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId;
        this.driverId = driver.id;
        this.passengerId = passenger.id;
  
         // insert in the trips to the store
         store.trips.push(this);
    }

    //trip has a passenger
    passenger() {
        return store.passengers.find(
            function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        );
    }

    //trip has a driver
    driver() {
        return store.drivers.find(
            function(driver) {
                return driver.id === this.driverId;
            }.bind(this)
        );
    }

}