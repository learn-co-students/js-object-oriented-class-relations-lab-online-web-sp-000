let store = {drivers:[], passengers:[], trips:[]};

let driverId = 0;

class Driver {
    constructor (name) {
        this.name = name;
        this.id = ++driverId;

        store.drivers.push(this);
    }
    trips() {
        store.trips.filter(driver => {
      return  passenger.userId === this.id;
        }).bind(this)
    }
}

let passengerId = 0;

class Passenger {
    constructor(name) {
        this.name = name;
        this.id = ++passengerId;

        store.passengers.push(this);

    }

    trips() {
        return store.trips.filter(passenger => (passenger.userId === this.id).bind(this))
    }
}
let tripId = 0;

class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId;

        if (driver) {
            this.driverId === driver.id;
        }
        if (passenger) {
            this.passengerId === passenger.id;
        }
            store.trips.push(this);
    }
    
}