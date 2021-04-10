function Util() {
    // distributedPassengers = distributeAllSeatsToAllPassengers();
    
    calculateTotalDistributedPassengers = (distributedPassengers) => {
        // console.log(distributedPassengers);
        // passengersSum = distributedPassengers.vipPassengersBusinessSeats + distributedPassengers.vipPassengersEconomySeats + distributedPassengers.regularPassengersBusinessSeats + distributedPassengers.regularPassengersEconomySeats
        // return passengersSum;
    }

    calculateTotalNumberOfPassengers = (amountOfPassengers) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return amountOfPassengers.reduce(reducer);
    }

    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();