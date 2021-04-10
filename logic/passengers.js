function Passengers() {
    checkFlightCapacity = (flightCapacity, passengersNumberArray) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let totalNumberOfPassengers = passengersNumberArray.reduce(reducer);

        if (totalNumberOfPassengers < flightCapacity) {
            return totalNumberOfPassengers;
        } else {
            throw new Error("Flight capacity (" + flightCapacity + ") exceeded. You have " + passengersNumber + " passengers.");
        }
    };

    distributeAllSeatsToAllPassengers = (numberOfVipPassengers, numberOfRegularPassengers, numberOfFlights, numberOfBusinessSeatsPerFlight, numberOfEconomySeatsPerFlight) => {

        let vipCount = 0, vipPassengersBusinessSeats = 0, vipPassengersEconomySeats = 0;
        let regularCount = 0,regularPassengersBusinessSeats = 0, regularPassengersEconomySeats = 0;
        let availableBusiness = numberOfFlights * numberOfBusinessSeatsPerFlight;
        let availableRegular =  numberOfFlights * numberOfEconomySeatsPerFlight;

        while((vipCount < availableBusiness) && (vipCount < numberOfVipPassengers)){
            vipPassengersBusinessSeats += 1;
            vipCount += 1;
        }
        while((vipCount < numberOfVipPassengers) && (vipPassengersEconomySeats < availableRegular)){ 
            vipPassengersEconomySeats += 1;
            vipCount +=1;
        }
        while((vipPassengersBusinessSeats < availableBusiness) && (regularCount < availableBusiness) && (regularCount < availableRegular)){
            regularPassengersBusinessSeats += 1;
            regularCount += 1;
        }
        while((vipPassengersEconomySeats < availableRegular) && (regularPassengersEconomySeats < availableRegular) && (regularCount < numberOfRegularPassengers)){
            regularPassengersEconomySeats += 1;
            regularCount += 1;
        }
        // if (numberOfBusinessSeatsPerFlight === numberOfVipPassengers) {
        //     vipPassengersBusinessSeats = numberOfBusinessSeatsPerFlight; 
        // } else if (numberOfBusinessSeatsPerFlight <= numberOfVipPassengers) {
        //     vipPassengersBusinessSeats = numberOfBusinessSeatsPerFlight;
        //     regularPassengersBusinessSeats = ( numberOfBusinessSeatsPerFlight - numberOfVipPassengers);
        // }
        console.log('vipPassengersBusinessSeats: ' + vipPassengersBusinessSeats)
        console.log('vipPassengersEconomySeats ' + vipPassengersEconomySeats)
        console.log('regularPassengersBusinessSeats ' + regularPassengersBusinessSeats)
        console.log('regularPassengersEconomySeats ' + regularPassengersEconomySeats)
        return {vipPassengersBusinessSeats, vipPassengersEconomySeats, regularPassengersBusinessSeats, regularPassengersEconomySeats}
        // return passengers;
    }

    return { checkFlightCapacity, distributeAllSeatsToAllPassengers };
};

module.exports = Passengers();
