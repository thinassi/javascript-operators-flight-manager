function Util() {
    // distributedPassengers = distributeAllSeatsToAllPassengers();
    
    calculateTotalDistributedPassengers = (distributedPassengers) => {
        console.log(distributedPassengers);
        totalDistributedPassengers = distributedPassengers.vipPassengersBusinessSeats + distributedPassengers.vipPassengersEconomySeats + distributedPassengers.regularPassengersBusinessSeats + distributedPassengers.regularPassengersEconomySeats
        return totalDistributedPassengers;
    }

    calculateTotalNumberOfPassengers = (amountOfPassengers) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        totalNumberOfPassengers = amountOfPassengers.reduce(reducer);
        console.log(totalNumberOfPassengers);
        return totalNumberOfPassengers
    }

    return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}

module.exports = Util();

// function Util() {

//     function calculateTotalDistributedPassengers(distributedPassengers) {
//         let totalDistributedPassengers = 0;
//         let value;
//         for (value in distributedPassengers) {
//            totalDistributedPassengers += distributedPassengers[value];
//         }
//         return totalDistributedPassengers;
//      }

//      function calculateTotalNumberOfPassengers(passengersArray) {
//         let totalNumberOfPassengers = 0;
//         let passengers;
//         for (passengers of passengersArray) {
//            totalNumberOfPassengers += passengers;
//         }
//         return totalNumberOfPassengers;
//      }

//      return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};

// }

// module.exports = Util(); 