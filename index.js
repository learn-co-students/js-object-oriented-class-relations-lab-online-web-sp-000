const store = {drivers:[], passengers:[], trips:[]}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver{
    constructor(name){
        this.id = ++driverId
        this.name = name
        store.drivers.push(this)
    }

    trips(){
        return store.trips.filter(
            function (trip){
                return this.id === trip.driverId
            }.bind(this)
        )
    }

    passengers(){
        return store.passengers.filter(
            function (passenger){
                return passenger.trips().find(
                    function (trip){
                        return trip.driverId === this.id
                    }.bind(this)
                )
            }.bind(this)
        )
    }
}

class Passenger{
    constructor(name){
        this.id = ++passengerId
        this.name = name
        store.passengers.push(this)
    }

    trips(){
        return store.trips.filter(
            function (trip){
                return this.id === trip.passengerId
            }.bind(this)
        )
    }

    drivers(){
        return store.drivers.filter(
            function (driver){
                return driver.trips().find(
                    function (trip){
                        return trip.passengerId === this.id
                    }.bind(this)
                )
            }.bind(this)
        )
    }
}

class Trip{
    constructor(driver, passenger){
        this.id = ++tripId
        this.driverId = driver.id
        this.passengerId = passenger.id
        store.trips.push(this)
    }
    
    passenger(){
        return store.passengers.find(
            function(passenger){
                return passenger.id === this.passengerId
            }.bind(this)
        )
    }

    driver(){
        return store.drivers.find(
            function(driver){
                return driver.id === this.driverId
            }.bind(this)
        )
    }
}