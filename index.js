let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;
let passengerId = 0;
let tripId = 0;

// creating a new Driver:
// 1. can create a Driver with a name‣
// 2. adds the driver to the store‣
// 3. adds a numerical id to each driver‣
// 4. adds a unique id to each driver‣
// 5. can store drivers

class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;

        // insert the driver to the store
        store.drivers.push(this);
    }

    // relate a @passenger and @trip to a Driver
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
}

// creating a new Passenger:
// 1. can create a Passenger with a name‣
// 2. adds the passenger to the store‣
// 3. adds a numerical id to each passenger‣
// 4. adds a unique id to each passenger‣
// 5. can store passengers

class Passenger {
    constructor(name) {
        this.id = passengerId++;
        this.name = name;

        // insert the passenger to the store
        store.passengers.push(this);
    }

    // relate a @driver and @trip to a Passenger
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
}

// creating a new Trip:
// 1. adds the trip to the store‣
// 2. adds a numerical id to each trip‣
// 3. adds a unique id to each trip‣
// 4. can store trips

class Trip {
    constructor(driver, passenger) {
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        this.id = tripId++;

        // insert the trip to the store
        store.trips.push(this);
    }

    // relate a @driver and @passenger to a Trip
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
