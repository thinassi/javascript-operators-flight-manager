function Util() {
    // distributedPassengers = distributeAllSeatsToAllPassengers();
    
    calculateTotalDistributedPassengers = (distributedPassengers) => {
        passengersSum = passengers.vipPassengersBusinessSeats + passengers.vipPassengersEconomySeats + passengers.regularPassengersBusinessSeats + passengers.regularPassengersEconomySeats
        return passengersSum;
    }

    calculateTotalNumberOfPassengers = (amountOfPassengers) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return amountOfPassengers.reduce(reducer);
    }

    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();