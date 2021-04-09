function Passengers() {
    checkFlightCapacity = (flightCapacity, passengersNumberArray) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let totalNumberOfPassengers = passengersNumberArray.reduce(reducer);

        if (totalNumberOfPassengers < flightCapacity) {
            return totalNumberOfPassengers;
        } else {
            throw new Error();
        }
    };

    distributeAllSeatsToAllPassengers = (numberOfVipPassengers, numberOfRegularPassengers, numberOfFlights, numberOfBusinessSeatsPerFlight, numberOfEconomySeatsPerFlight) => {
        let vipCount = 0;
        let vipPassengersBusinessSeats = 0;
        let vipPassengersEconomySeats = 0;

        let regularCount = 0;
        let regularPassengersBusinessSeats = 0;
        let regularPassengersEconomySeats = 0;

        while((vipCount < numberOfBusinessSeatsPerFlight) && (vipCount < numberOfVipPassengers)){
            vipPassengersBusinessSeats += 1;
            vipCount += 1;
        }
        while((vipCount < numberOfVipPassengers) && (vipPassengersEconomySeats < numberOfEconomySeatsPerFlight)){ 
            vipPassengersEconomySeats += 1;
            vipCount +=1;
        }
        while((vipPassengersBusinessSeats < numberOfBusinessSeatsPerFlight) && (regularCount < numberOfBusinessSeatsPerFlight) && (regularCount < numberOfRegularPassengers)){
            regularPassengersBusinessSeats += 1;
            regularCount += 1;
        }
        while((vipPassengersEconomySeats < numberOfEconomySeatsPerFlight) && (regularPassengersEconomySeats < numberOfEconomySeatsPerFlight) && (regularCount < numberOfRegularPassengers)){
            regularPassengersEconomySeats += 1;
            regularCount += 1;
        }
        // if (numberOfBusinessSeatsPerFlight === numberOfVipPassengers) {
        //     vipPassengersBusinessSeats = numberOfBusinessSeatsPerFlight; 
        // } else if (numberOfBusinessSeatsPerFlight <= numberOfVipPassengers) {
        //     vipPassengersBusinessSeats = numberOfBusinessSeatsPerFlight;
        //     regularPassengersBusinessSeats = ( numberOfBusinessSeatsPerFlight - numberOfVipPassengers);
        // }
        return {vipPassengersBusinessSeats, vipPassengersEconomySeats, regularPassengersBusinessSeats, regularPassengersEconomySeats}
        // return passengers;
    }

    return { checkFlightCapacity, distributeAllSeatsToAllPassengers };
};

module.exports = Passengers;
